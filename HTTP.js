import * as t from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as l from "./cv.js";
import * as u from "./ConnectionTracing.js";
import * as p from "./CrashTracing.js";
import * as c from "./CrashTracing.js";
import * as d from "./Enum.js";
import * as g from "./pako.mjs_cjs=&original=.js";
import * as h from "./otel-api.mjs.js";
import * as E from "./MessageBroker.js";

function main() {
    t._RF.push({}, "04f99sErctJOaOZPixVEthI", "HTTP", void 0);
    var T = function(e) {
            return e.GET = "get", e.POST = "post", e.PUT = "put", e.DELETE = "delete", e.UNKNOWN = "unknown", e
        }(T || {}),
        _ = function(e) {
            return e[e.NONE = 0] = "NONE", e[e.SEND_ZIP = 1] = "SEND_ZIP", e[e.RECEIVE_ZIP = 2] = "RECEIVE_ZIP", e[e.BOTH_ZIP = 3] = "BOTH_ZIP", e
        }(_ || {});
    class S {
        constructor() {
            this.jsonData = null, this.server_interface_nme = "", this.handler = null, this.requestType = null, this.parseType = null, this.isshowloading = !0, this.errorHandler = null, this.isPHPEndpoint = !1, this.showTips = !0, this.custom_header = null, this.callErrorHandlerExtra = !1, this.requestTimestamp = 0
        }
    }
    e("RequestInfo", S);
    class f {
        constructor() {
            this.HttpParseType = _, this.HttpRequestType = T, this.CONN_TIME_OUT = 2e4, this.MAX_CONN_TIME_OUT = 3e4, this.READ_TIME_OUT = 10, this._requestInfoMap = [], this._pako = null, this._skipAPIMaintenanceHandler = [], this.skipGuestIDEndpoints = ["/api/v1/legal/content"]
        }
        getRequestInfo(e) {
            return this._requestInfoMap[e]
        }
        clearRequestInfo() {
            this._requestInfoMap.splice(0, this._requestInfoMap.length - 1)
        }
        sendPostRequest(e) {
            let t = e.url,
                n = e.jsondata,
                s = e.handler,
                a = e.parseType,
                r = e.isshowloading,
                o = l.domainMgr.getServerInfo(),
                i = "",
                u = t; - 1 === u.search("http") && (i = o.invalid ? l.domainMgr.getDefultImgServer2() : o.image_server_2, t = i + u), this.sendRequest(t, n, s, T.POST, a, r)
        }
        sendRequest(e, t, n, s, a, r = !0, o = !0, i, l, u, p = !1) {
            return this.sendRequestV2(e, t, n, i, s, a, r, u, o, l, p)
        }
        addURLtoSkipUnderMaintenance(e) {
            -1 == this._skipAPIMaintenanceHandler.indexOf(e) && this._skipAPIMaintenanceHandler.push(e)
        }
        sendRequestV2(e, t, s, a, p, c, d = !0, g, h = !0, E, f = !1, I = !1) {
            if (!e) return void this.hideAllLoadings();
            if (!l.native.CheckNetWork()) {
                let e = n.getScene();
                return "HotUpdate" == e.name ? (null == a || a("error"), "no_wifi") : (l.config.GET_CLIENT_TYPE() == l.Enum.ClientType.CowboyWeb ? l.netWorkManager.onGoLogout() : (this.isInternetAvailable() ? null == a || a("error") : (this.showInternetNotAvailablePopup(), "HotUpdateLandscape" == e.name && (null == a || a("error"))), l.TT.showMsg(l.config.getStringData("ErrorToast33"), l.Enum.ToastType.ToastTypeError)), console.log("没有网络"), void this.hideAllLoadings())
            }
            this._requestInfoMap[e] || (this._requestInfoMap[e] = new S), this._requestInfoMap[e].jsonData = t, this._requestInfoMap[e].server_interface_nme = e, this._requestInfoMap[e].handler = s, this._requestInfoMap[e].requestType = p, this._requestInfoMap[e].parseType = c, this._requestInfoMap[e].isshowloading = d, this._requestInfoMap[e].errorHandler = a, this._requestInfoMap[e].isPHPEndpoint = g, this._requestInfoMap[e].showTips = h, this._requestInfoMap[e].custom_header = E, this._requestInfoMap[e].callErrorHandlerExtra = f, this._requestInfoMap[e].requestTimestamp = Date.now(), p = p || T.POST, c = c || _.NONE, null == t && (t = {}), null == (null == E ? void 0 : E.clientType) && (t.clientType = l.config.GET_CLIENT_TYPE()), null == (null == E ? void 0 : E.language) && (t.language = l.config.getCurrentLanguage()), g || (g = e.indexOf("index.php") >= 0);
            let H = JSON.stringify(t),
                m = new XMLHttpRequest,
                v = this.constructParams(H, g),
                y = e,
                C = this._skipAPIMaintenanceHandler.indexOf(y) >= 0;
            switch (e = this.constructFullURL(y, g), c) {
                case _.NONE:
                case _.RECEIVE_ZIP:
                    break;
                case _.SEND_ZIP:
                case _.BOTH_ZIP:
                    v = H, e = l.domainMgr.getServerInfo().data_server + y
            }
            m.open(p, e, !0), console.log("httpurl****::" + e), console.log("Parm******::" + v), m.timeout = this.CONN_TIME_OUT, (p == T.GET && !I || p != T.GET) && this.setRequestHeaders(m, p, g, E, y);
            {
                let n = () => {
                        this.endHttpSpan(m, e, u.Abort, null, v), r(l.StringTools.format("XMLHttpRequest-Event - > abort [readyState = {0}, status = {1}, statusText = {2}]", m.readyState, m.status, m.statusText)), m.ontimeout = () => {}, m.onerror = () => {}, m.onreadystatechange = () => {}
                    },
                    p = () => {
                        var t;
                        (this.endHttpSpan(m, e, u.NetworkError, null, v), r(l.StringTools.format("XMLHttpRequest-Event - > error [readyState = {0}, status = {1}, statusText = {2}]", m.readyState, m.status, m.statusText)), this.hideAllLoadings(), d) && (null == (t = l.LoadingView) || t.removeHttpMsg(e));
                        this.isInternetAvailable() || this.showInternetNotAvailablePopup(), console.log("http 连接出错*********");
                        let n = l.domainMgr.pollingDomain(m, y);
                        if (f && !n) try {
                            null == a || a("error")
                        } catch (e) {
                            console.warn("sendRequestV2 : " + e.Message)
                        }
                    },
                    g = () => {
                        var t;
                        (this.CONN_TIME_OUT = this.MAX_CONN_TIME_OUT, this.endHttpSpan(m, e, u.TimeOut, null, v), r(l.StringTools.format("XMLHttpRequest-Event - > timeout [readyState = {0}, status = {1}, statusText = {2}]", m.readyState, m.status, m.statusText)), this.hideAllLoadings(), d) && (null == (t = l.LoadingView) || t.removeHttpMsg(e));
                        console.log("http 连接超时*********");
                        let n = l.domainMgr.pollingDomain(m, y);
                        if (f && !n) try {
                            null == a || a("timeout")
                        } catch (e) {
                            console.warn("sendRequestV2 : " + e.Message)
                        }
                    },
                    E = () => {
                        var n;
                        (r(l.StringTools.format("XMLHttpRequest readyState = {0}, status = {1}, statusText = {2}", m.readyState, m.status, m.statusText)), 4 === m.readyState) && (d && (null == (n = l.LoadingView) || n.removeHttpMsg(e)));
                        if (4 === m.readyState && 502 === m.status) return C ? (this.endHttpSpan(m, e, u.Error, null, v), void(f && (null == a || a("502")))) : (this.hideAllLoadings(), l.config.getCurrentScene() === l.Enum.SCENE.HOTUPDATE_SCENE ? void this.onServerDown(!1, m, e, v, !0) : (this.endHttpSpan(m, e, u.Error, null, v), l.netWorkManager.Logout(!1, null, l.Enum.LogOutReason.ServerDown), void l.popUp.showMsgI18n({
                            txt: "Something_Went_Wrong",
                            iconType: l.Enum.PopUpIconType.Unreachable,
                            msgType: l.Enum.ToastType.ToastTypeError,
                            sureLabel: "Hotupdate_retrybtn"
                        })));
                        if (4 !== m.readyState || 503 !== m.status)
                            if (4 === m.readyState && m.status >= 500 && l.config.getCurrentScene() === l.Enum.SCENE.HOTUPDATE_SCENE && o(m.responseURL, !0) && m.responseURL.includes(this.getUpdateCheckURL())) this.onServerDown(!1, m, e, v);
                            else {
                                if (4 === m.readyState && m.status >= 200 && m.status < 300) {
                                    let n = m.responseText;
                                    switch (c) {
                                        case _.NONE:
                                        case _.SEND_ZIP:
                                            break;
                                        case _.RECEIVE_ZIP:
                                        case _.BOTH_ZIP: {
                                            let e = window.atob(n).split("").map((function(e) {
                                                    return e.charCodeAt(0)
                                                })),
                                                t = new Uint8Array(e);
                                            n = this._pako.inflate(t, {
                                                to: "string"
                                            })
                                        }
                                    }
                                    try {
                                        let a = "";
                                        if (n.length > 0 && (a = l.tryParseJSON(n), h && void 0 !== a.msg_code && "0" != a.msg_code)) {
                                            let t = l.config.getStringData("WEB_API_HEAD", !0) + this.getUpdateCheckURL();
                                            e != t && null != l.httpHandler && l.httpHandler.tipsMsg(a)
                                        }
                                        try {
                                            null == s || s(a, m.status, t)
                                        } catch (e) {
                                            console.warn("sendRequestV2 : " + e.Message)
                                        }
                                    } catch (t) {
                                        i("http err:" + t), i(t.stack), this.endHttpSpan(m, e, u.NotValidResponse, t, v)
                                    }
                                }
                                if (4 === m.readyState && m.status >= 400 && m.status <= 500) {
                                    let t = m.responseText;
                                    switch (c) {
                                        case _.NONE:
                                        case _.SEND_ZIP:
                                            break;
                                        case _.RECEIVE_ZIP:
                                        case _.BOTH_ZIP: {
                                            let e = window.atob(t).split("").map((function(e) {
                                                    return e.charCodeAt(0)
                                                })),
                                                n = new Uint8Array(e);
                                            t = this._pako.inflate(n, {
                                                to: "string"
                                            })
                                        }
                                    }
                                    try {
                                        let n = "";
                                        if (t.length > 0) {
                                            if (n = l.tryParseJSON(t), h && void 0 !== n.msg_code && "0" != n.msg_code) {
                                                let t = l.config.getStringData("WEB_API_HEAD", !0) + this.getUpdateCheckURL();
                                                e != t && null != l.httpHandler && l.httpHandler.tipsMsg(n)
                                            }
                                        } else n = m.status;
                                        null == a || a(n), this.endHttpSpan(m, e, u.Error, null, v)
                                    } catch (t) {
                                        null == a || a(""), l.popUp.showMsgI18n({
                                            txt: "ErrorUnknown",
                                            msgType: l.Enum.ToastType.ToastTypeMalformedResponse
                                        }), i("http err:" + t), i(t.stack), this.endHttpSpan(m, e, u.NotValidResponse, t, v)
                                    }
                                }
                            }
                        else {
                            if (C ? this.endHttpSpan(m, e, u.Error, null, v) : l.config.getCurrentScene() === l.Enum.SCENE.LOGIN_SCENE || l.config.getCurrentScene() === l.Enum.SCENE.REGISTER_SCENE || l.config.getCurrentScene() === l.Enum.SCENE.HOTUPDATE_SCENE ? this.hideAllLoadings() : l.netWorkManager.Logout(!1, null, l.Enum.LogOutReason.ServerDown), f) try {
                                null == a || a("503")
                            } catch (e) {
                                console.warn("sendRequestV2 : " + e.Message)
                            }
                            C || this.onServerDown(!0, m, e, v)
                        }
                    };
                m.onabort = n, m.onerror = p, m.ontimeout = g, m.onreadystatechange = E
            }
            return v.length < 100 && console.log("XMLHttpRequest param = " + v), console.log("XMLHttpRequest url = " + e), console.log("XMLHttpRequest timeout = " + m.timeout), m.send(v), d && l.LoadingView.addHttpMsg(e), m
        }
        onCancel() {
            s.end()
        }
        endHttpSpan(e, t, n, s, a = null) {
            if (p.hasInstance()) {
                let r = {
                    url: t,
                    timeout: null == e ? void 0 : e.timeout,
                    status: null == e ? void 0 : e.status,
                    responseText: null == e ? void 0 : e.responseText,
                    statusText: null == e ? void 0 : e.statusText,
                    errorType: n,
                    payload: a ? a.replace(/(("password":)("[^"]*")|("avatarBase64":)("[^"]*"))/g, "$2$4") : "unknown",
                    webSocketIsConnected: l.netWork.isConnect(),
                    webSocketIsConnecting: l.netWork.isConnecting()
                };
                s && s instanceof Error && (r.exception_name = s.name, r.exception_message = s.message, r.exception_stack = s.stack), p.getInstance().endSpan(c.HTTPRequests, c.HTTPRequests, r, n == u.Abort ? g.OK : g.ERROR)
            }
        }
        onServerDown(e, t, n, a = null, r) {
            if (this.endHttpSpan(t, n, u.Error, null, a), l.appConfig.isWebApp) h.getInstance().sendAppDown();
            else {
                let t = () => {
                        l.config.getCurrentScene() === l.Enum.SCENE.HOTUPDATE_SCENE && s.end()
                    },
                    n = {
                        title: "Server_Unreachable_Title",
                        subtitle: "Server_Unreachable_SubTitle",
                        txt: e ? "Server_Unreachable" : r ? "Something_Went_Wrong" : "Hotupdate_Get_URL_Unreachable",
                        iconType: d.Unreachable,
                        hideOkayBtn: !0,
                        isShowGameLogoGroup: !0,
                        cancelCallback: t
                    };
                l.popUp.showMsgI18n(n)
            }
        }
        hideAllLoadings() {
            l.config.getCurrentScene() != l.Enum.SCENE.HOTUPDATE_SCENE && l.SwitchLoadingView.hide()
        }
        constructParams(e, t) {
            if (t || l.appConfig.isPKW) {
                return "data=" + e + "&" + "sign=" + l.md5.CreateSign(e)
            }
            return e
        }
        constructFullURL(e, t) {
            if (e.search("http") >= 0) return e;
            if (t || l.appConfig.isPKW) {
                let t = "",
                    n = l.domainMgr.getServerInfo();
                return console.log("HTTP::getServerId:: " + l.dataHandler.getServerId()), t = l.dataHandler.getServerId() < l.Enum.ServerButtonType.ServerButtonType_max && l.dataHandler.getServerId() > l.Enum.ServerButtonType.ServerButtonType_none || l.dataHandler.getServerId() == l.Enum.ServerButtonType.ServerButtonType_special ? l.config.getStringData("WEB_API_HEAD", !0) : n.invalid ? l.domainMgr.getLoginServer() : n.web_server, t + e
            }
            return l.config.getServerHead() + e
        }
        setRequestHeaders(e, t, n, s, a = "") {
            if (p.hasInstance() && p.getInstance().startSpan(c.HTTPRequests), s) {
                var r = Object.keys(s);
                for (let t = 0; t < r.length; t++) e.setRequestHeader(r[t], s[r[t]])
            } else if (n || l.appConfig.isPKW) switch (t) {
                case T.GET:
                    e.setRequestHeader("Accept-Encoding", "gzip,deflate");
                    break;
                case T.POST:
                    e.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
                    break;
                case T.PUT:
                case T.UNKNOWN:
            } else {
                switch (t) {
                    case T.GET:
                        e.setRequestHeader("Content-Encoding", "gzip,deflate");
                        break;
                    case T.POST:
                    case T.PUT:
                        e.setRequestHeader("Content-Type", "application/json");
                        break;
                    case T.UNKNOWN:
                }
                this.setHeaders(e, a)
            }
        }
        setHeaders(e, t = "") {
            let n = l.dataHandler.getUserData().getUserToken(),
                s = l.dataHandler.getUserData().getUserIdS();
            if (this.skipGuestIDEndpoints.some((e => t.includes(e))) && (n = "", s = ""), e.setRequestHeader("X-SessionId", n), e.setRequestHeader("X-UserId", s), e.setRequestHeader("X-AppBundleID", l.appConfig.getGeneralConfig().bunderConfig.bunder_AppID), e.setRequestHeader("x-app-version", l.config.GET_CLIENT_VERSION()), p.IsActive() && p.hasInstance()) {
                let t = p.getInstance().getSpan(c.HTTPRequests);
                if (t) {
                    var a;
                    const n = null == (a = t.span) ? void 0 : a.spanContext();
                    n && (e.setRequestHeader("X-TraceId", n.traceId), e.setRequestHeader("X-SpanId", n.spanId))
                }
            }
        }
        requestUrl(e, t, n) {
            var s = new XMLHttpRequest;
            s.open("GET", e, !0), s.onreadystatechange = function() {
                console.log("xhr.readyState  " + s.readyState), console.log("xhr.status  " + s.status), 4 === s.readyState && (200 === s.status ? (console.log(s.response), console.log(s.responseURL), t && t(s.response)) : n && n(s.response))
            }.bind(this), s.send()
        }
        requestDownload(e, t, n, s) {
            var a = new XMLHttpRequest;
            a.responseType = "arraybuffer", a.open("GET", e, !0), a.onreadystatechange = function() {
                console.log("xhr.readyState  " + a.readyState), console.log("xhr.status  " + a.status), 4 === a.readyState && 200 === a.status ? (console.log("xhr.response*************"), console.log(a.response), t && t(a.response, e, s)) : n && n()
            }.bind(this), a.send()
        }
        unzip(e) {
            let t = window.atob(e).split("").map((function(e) {
                    return e.charCodeAt(0)
                })),
                n = new Uint8Array(t);
            return e = this._pako.inflate(n, {
                to: "string"
            })
        }
        static getInstance() {
            return f._g_instence || (f._g_instence = new f, f._g_instence._pako = E), f._g_instence
        }
        showInternetNotAvailablePopup() {
            l.config.getCurrentScene() == l.Enum.SCENE.HOTUPDATE_SCENE ? l.MessageCenter.send("responseFailed_noNetwork", "ErrorToast0") : (l.MessageCenter.send("responseFailed_noNetwork"), l.popUp.showMsgI18n({
                txt: "CheckInternetConnection",
                msgType: l.Enum.ToastType.ToastTypeWarning
            }))
        }
        isInternetAvailable() {
            return !(a.isNative && !l.native.CheckNetWork() || !a.isNative && !navigator.onLine)
        }
        getUpdateCheckURL() {
            return l.config.getStringData("WEB_API_GET_RESOURCE_URL", !0)
        }
    }
    e("HTTP", f), f._g_instence = null, t._RF.pop()
}