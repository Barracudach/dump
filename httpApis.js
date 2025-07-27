import * as t from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as s from "./cc.js";
import * as i from "./mttconfig.js";
import * as r from "./mttconfig.js";
import * as a from "./mttconfig.js";
import * as u from "./Pb.js";
import * as c from "./commonProto.mjs_cjs=&original=.js";
import * as p from "./LoadingBlocker.js";
import * as l from "./LoadingBlocker.js";
import * as d from "./ConnectionTracing.js";
import * as m from "./ConnectionTracing.js";
import * as h from "./CrashTracing.js";
import * as f from "./cv.js";
import * as _ from "./MTTConnector.js";
import * as g from "./AppUpdate.js";
import * as R from "./TimeElapse.js";

function main() {
    e("httpApis", void 0), t._RF.push({}, "2cfeaaw545GQa/JsCaZd/bk", "httpApis", void 0);
    e("ExecutionTimeTheshold", 3e3);
    class T {
        static get appUpdate() {
            return T._appUpdate || (T._appUpdate = new _), T._appUpdate
        }
        static cancelAll() {
            for (let e in T.pendingResponseList) {
                let t = T.pendingResponseList[e];
                t && t.stopRequest(!1)
            }
        }
        set timeout(e) {
            this.xhr && (this._timeout = e, this.xhr.timeout = e)
        }
        constructor(e = r.URL_TYPE.API, t = "", o = !0, s = !0, n = !0, a = !0) {
            this.xhr = void 0, this.onerror = null, this.ontimeout = null, this.onload = null, this.onabort = null, this.onreadystatechange = () => {}, this.callbacks = [], this.retryAction = null, this.method = void 0, this.url = void 0, this.async = void 0, this.username = void 0, this.password = void 0, this.body = void 0, this._urlType = 0, this._hasLoading = !1, this._xhrIdentifier = Date.now().toString(), this._timeout = -1, this._key = "", this._requestHeaderKeys = [], this._requestHeaderValues = [], this._responseType = "", this._needGetUrlConfigOnError = !0, this._needGetUrlConfigOnTimeout = !0, this._configs = [], this._configIndexSequence = [], this._configIndex = 0, this._printNormalLog = !0, this._printErrorLog = !0, this._retryGetUrlConfigVersion = 0, this._retryGetUrlConfig = 0, this.errorAction = e => {
                let t = this.getPrefix() + this.url;
                var o, s;
                l.hasInstance() && l.getInstance().traceHttpApis(p.Error, t, {
                    statusCode: (null == (o = this.xhr) ? void 0 : o.status) ?? "unknown",
                    readyState: (null == (s = this.xhr) ? void 0 : s.readyState) ?? "unknown",
                    network: h.native.CheckNetWork(),
                    stackTrace: d.getTrace(0, 20)
                });
                this._printErrorLog && cc_mtt.vv.ConsoleLog.log("httpApis error", this._urlType, this.getCurrentIndex(), this.url, e, this.xhr ? this.xhr.status + " " + this.xhr.readyState : ""), this.isLastIndex() ? (this.onerror && this.onerror instanceof Function && this.onerror(), this._key && (T.pendingResponseList[this._key] = null), this._hasLoading && c.hide("httpApis " + this.url), this.removeRequestStored("errorAction"), this.getUrlConfig()) : (this.changeNextIndex(), this.createXHR(), this.open(this.method, this.url, this.async, this.username, this.password), this.send(this.body))
            }, this.timeoutAction = e => {
                let t = this.getPrefix() + this.url;
                var o, s;
                l.hasInstance() && l.getInstance().traceHttpApis(p.TimeOut, t, {
                    statusCode: (null == (o = this.xhr) ? void 0 : o.status) ?? "unknown",
                    readyState: (null == (s = this.xhr) ? void 0 : s.readyState) ?? "unknown",
                    network: h.native.CheckNetWork(),
                    stackTrace: d.getTrace(0, 20)
                });
                this._printErrorLog && cc_mtt.vv.ConsoleLog.log("httpApis timeout", this._urlType, this.getCurrentIndex(), this.url, e, this.ontimeout, this.onerror, this.xhr ? this.xhr.status + " " + this.xhr.readyState : ""), this.isLastIndex() ? (this.ontimeout && this.ontimeout instanceof Function ? this.ontimeout() : this.onerror && this.onerror instanceof Function && this.onerror(), this._key && (T.pendingResponseList[this._key] = null), this._hasLoading && c.hide("httpApis " + this.url), this.removeRequestStored("timeoutAction"), this.getUrlConfig(!1)) : (this.xhr.abort(), this.changeNextIndex(), this.createXHR(), this.open(this.method, this.url, this.async, this.username, this.password), this.setStoredRequestHeader(), this.send(this.body))
            }, this.abortAction = e => {
                this.onabort && this.onabort instanceof Function && this.onabort()
            }, this.loadAction = e => {
                g.getInstance().start("LongHttpLoad", "loadAction");
                let t = this.getPrefix() + this.url;
                if (l.hasInstance() && l.getInstance().traceHttpApis(p.Response, t), this.xhr)
                    if (4 == this.xhr.readyState && this.xhr.status >= 200 && this.xhr.status < 400) {
                        let e = this.getCurrentIndex();
                        r.changeIndex(this._urlType, e), this.onload && this.onload instanceof Function && (this._printNormalLog && cc_mtt.vv.ConsoleLog.log("httpApis onload", this._urlType, e, this.url), this._key && (T.pendingResponseList[this._key] = null), this.onload()), this._hasLoading && c.hide("httpApis " + this.url)
                    } else this.errorAction();
                g.getInstance().end("LongHttpLoad", "loadAction", {
                    finalUrl: t
                })
            }, this.readystatechangeAction = (e, t = 0) => {
                var o;
                if (t < 0) null == (o = d.getInstance()) || o.trace(m.HTTPRequests, "onreadystatechange", {
                    SelfCallFuncion: !0,
                    API_URL: this.url,
                    Counter: t,
                    ErrorStack: d.getTrace(0, 20)
                });
                else if (this.xhr) {
                    if (this.onreadystatechange && this.onreadystatechange instanceof Function) {
                        this._printNormalLog && 4 == this.xhr.readyState && this.xhr.status >= 200 && this.xhr.status < 400 && cc_mtt.vv.ConsoleLog.log("httpApis onreadystatechange", this._urlType, this.getCurrentIndex(), this.url);
                        try {
                            this.onreadystatechange(e, t - 1)
                        } catch (e) {
                            var s;
                            null == (s = d.getInstance()) || s.trace(m.HTTPRequests, "onreadystatechange", {
                                FuncionValue: this.onreadystatechange,
                                FunctionType: typeof this.onreadystatechange,
                                URL_Type: this._urlType,
                                ReponseType: this.responseType,
                                API_URL: this.url,
                                API_TYPE: this.method,
                                Counter: t,
                                ErrorMessage: null == e ? void 0 : e.message,
                                ErrorStack: null == e ? void 0 : e.stack
                            })
                        }
                    }
                    4 == this.xhr.readyState && 0 != this.xhr.status && this.removeRequestStored("readystatechangeAction"), 4 == this.xhr.readyState && this.xhr.status >= 200 && this.xhr.status < 400 && this._hasLoading && c.hide("httpApis " + this.url)
                }
            }, this._urlType = e, this._needGetUrlConfigOnError = o, this._needGetUrlConfigOnTimeout = s, this._printNormalLog = n, this._printErrorLog = a, this.initConfig(), this._key = t, this._key && T.pendingResponseList[this._key] && (cc_mtt.vv.ConsoleLog.log("CustomXMLHttpRequest pendingResponseList", this._key), T.pendingResponseList[this._key].stopRequest(!1)), T.pendingResponseList[this._key] = this, this.createXHR()
        }
        initConfig() {
            this._configs = r.getConfig(this._urlType);
            let e = r.getCurrentIndex(this._urlType);
            for (let t = e; t < this._configs.length; t++) this._configIndexSequence.push(t);
            for (let t = 0; t < e; t++) this._configIndexSequence.push(t);
            this._configIndex = 0
        }
        isLastIndex() {
            return this._urlType == r.URL_TYPE.NONE || this._configIndex + 1 >= this._configIndexSequence.length
        }
        changeIndex(e) {
            this._urlType != r.URL_TYPE.NONE && (this._configIndex = e, this._configIndex = this._configIndex % this._configIndexSequence.length)
        }
        changeNextIndex() {
            this._urlType != r.URL_TYPE.NONE && (this._configIndex++, this._configIndex = this._configIndex % this._configIndexSequence.length)
        }
        getCurrentIndex() {
            return this._configIndex < this._configIndexSequence.length ? this._configIndexSequence[this._configIndex] : -1
        }
        getCurrentConfig() {
            let e = this.getCurrentIndex();
            return this._configs && -1 != e && e < this._configs.length ? this._configs[e] : ""
        }
        getPrefix() {
            switch (this._urlType) {
                case r.URL_TYPE.WORLD:
                case r.URL_TYPE.GAME:
                    return r.addPrefix(r.SERVER_URL_WS_PREFIX, this.getCurrentConfig());
                default:
                    return r.addPrefix(r.SERVER_URL_HTTP_PREFIX, this.getCurrentConfig())
            }
        }
        getUrlConfig(e = !0) {
            T.appUpdate.getUrlConfigVersion((() => {
                this._printErrorLog && cc_mtt.vv.ConsoleLog.log("httpApis getUrlConfig end", e ? "onerror" : "ontimeout")
            }), (() => {}))
        }
        open(e, t, o = !0, s, n) {
            this.method = e, this.url = t, this.async = o, this.username = s, this.password = n, this._hasLoading && c.show("httpApis " + this.url);
            let r = this.getPrefix() + t;
            l.hasInstance() && l.getInstance().traceHttpApis(p.Request, r, {
                network: h.native.CheckNetWork()
            }), this.xhr.open(e, r, o, s, n)
        }
        send(e) {
            this.body = e, this.xhr && (cc_mtt.vv.ConsoleLog.log("httpApis send", this._urlType, this.getCurrentIndex(), this.url, e ? JSON.stringify(e) : "null"), this.xhr.send(e))
        }
        createXHR() {
            this.xhr = new XMLHttpRequest, this.xhr.onerror = this.errorAction, this.xhr.ontimeout = this.timeoutAction, this.xhr.onload = this.loadAction, this.xhr.onabort = this.abortAction, this.xhr.onreadystatechange = this.readystatechangeAction, this._timeout > 0 && (this.timeout = this._timeout), this._responseType && (this.xhr.responseType = this._responseType)
        }
        setStoredRequestHeader() {
            if (this._requestHeaderKeys && this._requestHeaderValues)
                for (let e = 0; e < this._requestHeaderKeys.length; e++) this.xhr.setRequestHeader(this._requestHeaderKeys[e], this._requestHeaderValues[e])
        }
        setRequestHeader(e, t) {
            this._requestHeaderKeys.push(e), this._requestHeaderValues.push(t), this.xhr && this.xhr.setRequestHeader(e, t)
        }
        getResponseHeader(e) {
            return this.xhr && this.xhr.getResponseHeader(e), ""
        }
        getAllResponseHeaders() {
            return this.xhr && this.xhr.getAllResponseHeaders(), ""
        }
        setHasLoading(e) {
            this._hasLoading = e
        }
        get response() {
            return this.xhr ? this.xhr.response : null
        }
        get status() {
            return this.xhr ? this.xhr.status : -1
        }
        get readyState() {
            return this.xhr ? (this._hasLoading && c.hide("httpApis " + this.url), this.xhr.readyState) : 0
        }
        get responseText() {
            return this.xhr ? this.xhr.responseText : null
        }
        set responseType(e) {
            this._responseType = e, this.xhr && (this.xhr.responseType = e)
        }
        storeRequest() {
            for (let e of cc_mtt.vv.DataManager.currentXhrs) e._xhrIdentifier === this._xhrIdentifier && (this._xhrIdentifier = Date.now().toString());
            cc_mtt.vv.DataManager.currentXhrs.push(this)
        }
        removeRequestStored(e = "") {
            for (let e = 0; e < cc_mtt.vv.DataManager.currentXhrs.length; e++) cc_mtt.vv.DataManager.currentXhrs[e]._xhrIdentifier === this._xhrIdentifier && cc_mtt.vv.DataManager.currentXhrs.splice(e, 1);
            cc_mtt.vv.ConsoleLog.log("check currentXhrs::", e, cc_mtt.vv.DataManager.currentXhrs.length)
        }
        stopRequest(e = !0) {
            this._printNormalLog && cc_mtt.vv.ConsoleLog.log("httpApis stop request:", this._urlType, this.url), this.xhr.abort(), e && (this.ontimeout && this.ontimeout instanceof Function ? this.ontimeout() : this.onerror && this.onerror instanceof Function && this.onerror()), this.removeRequestStored("stopRequest"), this._hasLoading && c.hide("httpApis " + this.url)
        }
    }
    let v;
    e("CustomXMLHttpRequest", T), T.pendingResponseList = {}, T._appUpdate = null,
        function(e) {
            e.requestSMS = function(e, o, s) {
                let n = new T;
                n.onerror = s, n.open("GET", `/sms/${e}`, !0), n.onload = function() {
                    let e = n.responseText;
                    e && (o(e), t(e, {
                        url: "/sms/"
                    }))
                }, n.storeRequest(), n.send()
            }, e.requestSMSCheck = function(e, o, s) {
                let n = new T;
                n.onerror = s, n.open("GET", `/smsCheck/${e}`), n.onload = function() {
                    let e = n.responseText;
                    e && (o(e), t(e, {
                        url: "/smsCheck/"
                    }))
                }, n.storeRequest(), n.send()
            }, e.requestPasswordResetSMS = function(e, o, s) {
                let n = new T;
                n.onerror = s, n.open("GET", `/sms-resetPassword/${e}`, !0), n.onload = function() {
                    let e = n.responseText;
                    e && (o(e), t(e, {
                        url: "/sms-resetPassword/"
                    }))
                }, n.storeRequest(), n.send()
            }, e.requestPasswordResetSMSCheck = function(e, o, s) {
                let n = new T;
                n.onerror = s, n.open("GET", `/smsCheck-resetPassword/${e}`), n.onload = function() {
                    let e = n.responseText;
                    e && (o(e), t(e, {
                        url: "/smsCheck-resetPassword/"
                    }))
                }, n.storeRequest(), n.send()
            }, e.requestTransferSMS = function(e, o, s) {
                let n = new T;
                n.onerror = s, n.open("GET", `/smsWithTpl/${e}/` + encodeURIComponent("send:{{code}}"), !0), n.onload = function() {
                    let e = n.responseText;
                    e && (o(e), t(e, {
                        url: "/smsWithTpl/"
                    }))
                }, n.send()
            }, e.requestUserPasswordReset = function(e, s, n, a, i) {
                let c = u.modelProto.User.create(e);
                const {
                    UserResetPasswordRequest: l
                } = u.commonProto, {
                    UserResetPasswordResponse: p
                } = u.commonProto;
                let d = new T(r.URL_TYPE.APIWORLD);
                d.onload = function() {
                    let e = d.response;
                    if (e) {
                        let o = new Uint8Array(e),
                            s = p.decode(o);
                        a(s), t(s, {
                            url: "/api/world/resetPassword"
                        })
                    }
                }, d.onerror = i, d.open("POST", "/api/world/resetPassword", !0), o.isNative && d.setRequestHeader("Content-Type", "application/octet-stream"), d.responseType = "arraybuffer", d.send(l.encode(new l({
                    User: c,
                    ValidationCode: n,
                    NewPassword: s
                })).finish())
            }, e.requestUserRegister = function(e, s, n, a) {
                let i = u.modelProto.User.create(e);
                const {
                    UserRegisterRequest: c
                } = u.commonProto, {
                    UserRegisterResponse: l
                } = u.commonProto;
                let p = new T(r.URL_TYPE.APIWORLD);
                p.onload = function(e) {
                    let o = p.response;
                    if (o) {
                        let e = new Uint8Array(o),
                            s = l.decode(e);
                        n(s), t(s, {
                            url: "/api/world/register"
                        })
                    }
                }, p.onerror = a, p.open("POST", "/api/world/register", !0), o.isNative && p.setRequestHeader("Content-Type", "application/octet-stream"), p.responseType = "arraybuffer", p.send(c.encode(new c({
                    User: i,
                    validationCode: s
                })).finish())
            }, e.requestGameRecordList = function(e, o) {
                var s = new T;
                const {
                    Pineapple_Rounds: n
                } = protobuf.roots.default.commonProto;
                s.responseType = "arraybuffer", s.onreadystatechange = () => {
                    if (4 == s.readyState && s.status >= 200 && s.status < 400) {
                        var e = s.response;
                        if (e) {
                            let s = new Uint8Array(e);
                            e = n.decode(s), o(e), t(e, {
                                url: "/ppRecordList/"
                            })
                        }
                    }
                };
                var r = `/ppRecordList/${e}`;
                cc_mtt.vv.ConsoleLog.log(r), s.open("GET", r, !0), s.send()
            }, e.requestMttPlayerSignUp = function(e = {
                UserId: 0,
                TournamentId: 0,
                TicketId: 0,
                PlatForm: 0,
                isDesktop: !1,
                PrivateMttToken: "",
                GeoComplianceToken: "",
                RegGoldType: 0
            }, n, a) {
                const {
                    MttPlayerSignupRequest: i
                } = u.commonProto, {
                    MttPlayerSignupResponse: c
                } = u.commonProto;
                let l = new T(r.URL_TYPE.APIMTT);
                l.onload = function() {
                    let o = l.response;
                    if (cc_mtt.vv.ConsoleLog.log("xhr status ", l.status), o) {
                        let r = new Uint8Array(o),
                            a = c.decode(r);
                        s.emit("requestMttPlayerSignUp_onResponse", a, e), n(a), t(a, {
                            url: "/api/mtt/signup"
                        })
                    }
                }, l.onerror = a, l.open("POST", "/api/mtt/signup", !0), o.isNative && l.setRequestHeader("Content-Type", "application/octet-stream"), l.responseType = "arraybuffer", l.timeout = 15e3, l.ontimeout = () => {
                    null == a || a()
                };
                let p = new i;
                p.TournamentId = e.TournamentId, p.UserId = e.UserId, p.TicketId = e.TicketId, p.UserToken = cc_mtt.vv.DataManager.token, p.PlatForm = e.PlatForm, p.isDesktop = e.isDesktop, p.PrivateMttToken = e.PrivateMttToken, p.GeoComplianceToken = e.GeoComplianceToken, p.RegGoldType = e.RegGoldType, l.send(i.encode(p).finish())
            }, e.requestMttPlayerSignUpCancel = function(e = {
                UserId: 0,
                TournamentId: 0
            }, n, a) {
                const {
                    MttPlayerCancelSignUpRequest: i
                } = u.commonProto, {
                    MttPlayerCancelSignUpResponse: c
                } = u.commonProto;
                let l = new T(r.URL_TYPE.APIMTT);
                l.onload = function() {
                    let o = l.response;
                    if (cc_mtt.vv.ConsoleLog.log("xhr status ", l.status), o) {
                        let r = new Uint8Array(o),
                            a = c.decode(r);
                        s.emit("requestMttPlayerSignUpCancel_onResponse", a, e), n(a), t(a, {
                            url: "/api/mtt/cancel"
                        })
                    }
                }, l.onerror = a, l.open("POST", "/api/mtt/cancel", !0), o.isNative && l.setRequestHeader("Content-Type", "application/octet-stream"), l.responseType = "arraybuffer";
                let p = new i;
                p.TournamentId = e.TournamentId, p.UserId = e.UserId, p.UserToken = cc_mtt.vv.DataManager.token, l.send(i.encode(p).finish())
            }, e.requestMttReenter = function(e = {
                UserId: 0,
                TournamentId: 0,
                TicketId: 0,
                PlatForm: 0,
                isDesktop: !1,
                GeoComplianceToken: "",
                RegGoldType: 0
            }, n, a) {
                const {
                    MttReenterRequest: i
                } = u.commonProto, {
                    MttReenterResponse: c
                } = u.commonProto;
                let l = new T(r.URL_TYPE.APIMTT);
                l.onload = function() {
                    let o = l.response;
                    if (cc_mtt.vv.ConsoleLog.log("xhr status ", l.status), o) {
                        let r = new Uint8Array(o),
                            a = c.decode(r);
                        s.emit("requestMttReenter_onResponse", a, e), n(a), t(a, {
                            url: "/api/mtt/reenter"
                        })
                    }
                }, l.onerror = a, l.open("POST", "/api/mtt/reenter", !0), o.isNative && l.setRequestHeader("Content-Type", "application/octet-stream"), l.responseType = "arraybuffer";
                let p = new i;
                p.TournamentId = e.TournamentId, p.UserId = e.UserId, p.TicketId = e.TicketId, p.UserToken = cc_mtt.vv.DataManager.token, p.PlatForm = e.PlatForm, p.isDesktop = e.isDesktop, p.GeoComplianceToken = e.GeoComplianceToken, p.RegGoldType = e.RegGoldType, l.send(i.encode(p).finish())
            }, e.requestMttMorebuy = function(e = {
                UserId: 0,
                TournamentId: 0,
                TicketInfo: [],
                RegGoldType: 0,
                BuyCount: 0
            }, t, s) {
                const {
                    MttMorebuyRequest: n
                } = u.commonProto, {
                    MttMorebuyResponse: a
                } = u.commonProto;
                let i = new T(r.URL_TYPE.APIMTT);
                i.onload = function() {
                    let e = i.response;
                    if (cc_mtt.vv.ConsoleLog.log("xhr status ", i.status), e) {
                        let o = new Uint8Array(e);
                        t(a.decode(o))
                    }
                }, i.onerror = s, i.open("POST", "/api/mtt/moreBuy", !0), o.isNative && i.setRequestHeader("Content-Type", "application/octet-stream"), i.responseType = "arraybuffer";
                let c = new n;
                c.TournamentId = e.TournamentId, c.UserId = e.UserId, c.TicketInfo = [];
                for (let t of e.TicketInfo) {
                    let e = {
                        TicketId: t.ticketId,
                        PlatForm: t.platForm
                    };
                    c.TicketInfo.push(e)
                }
                c.UserToken = cc_mtt.vv.DataManager.token, c.RegGoldType = e.RegGoldType, c.BuyCount = e.BuyCount, i.send(n.encode(c).finish())
            };

            function t(e, t = {}, o = "MttRequestError", s = !1) {
                if (e && (s || e.ErrorCode && 0 != e.ErrorCode && "0" != e.ErrorCode)) {
                    var n;
                    let s = {
                        ErrorCode: e.ErrorCode ? e.ErrorCode : 0,
                        ExternalErrorCode: e.ExternalErrorCode ? e.ExternalErrorCode : 0
                    };
                    t && (s = {
                        ...s,
                        ...t
                    }), null == (n = d.getInstance()) || n.trace(m.MttRequestError, o, s)
                }
            }

            function c(e, o = {}, s = !1) {
                e && (e.ErrorCode = e.code, t(e, o, "SngRequestError", s))
            }
            e.requestMttTournamentDetail = function(e, a, i, c = 0, l = {}) {
                const {
                    page: p,
                    mfid: m,
                    pageTimestamp: h,
                    lang: f = cc_mtt.vv.DataManager.i18DataMap[cc_mtt.vv.DataManager.lang] || cc_mtt.vv.DataManager.lang
                } = l, {
                    MttTournamentDetailRequest: _
                } = u.commonProto, {
                    MttTournamentDetailResponse: g
                } = u.commonProto, R = "/api/mtt/tournamentDetail/".concat(e.toString());
                let v = new T(r.URL_TYPE.API, R);
                v.callbacks.push(a), v.timeout = c, v.onload = function() {
                    let o = v.response;
                    if (cc_mtt.vv.ConsoleLog.log("xhr status ", v.status), o) try {
                        let n = new Uint8Array(o),
                            r = g.decode(n);
                        s.emit("requestMttTournamentDetail_onResponse", r, e), v.callbacks.forEach((e => {
                            e(r)
                        })), t(r, {
                            url: "/api/mtt/tournamentDetail",
                            id: e,
                            page: p,
                            mfid: m,
                            pageTimestamp: h,
                            lang: f
                        })
                    } catch (t) {
                        n("httpAsip.ts -> xhr.onloade->  xhr.callbacks handle exception ", t.name, t.message, t.stack), d.hasInstance() && d.getInstance().traceJSException(t.name + ` in httpApis.requestMttTournamentDetail(${e}, ...)`, t.message, t.stack, !1)
                    }
                }, v.onerror = i;
                let y = `/api/mtt/tournamentDetail?token=${cc_mtt.vv.DataManager.token}&newUI=true`;
                p && (y += `&page=${p}`), m && (y += `&mfid=${m}`), h && (y += `&timeStamp=${h}`), f && (y += `&lang=${f}`), v.open("POST", y, !0), o.isNative && v.setRequestHeader("Content-Type", "application/octet-stream"), v.responseType = "arraybuffer";
                let P = new _;
                P.TournamentId = e, v.storeRequest(), v.send(_.encode(P).finish())
            }, e.requestMttTournamentStatus = function(e, n, a) {
                const {
                    MttTournamentStatusRequest: i
                } = u.commonProto, {
                    MttTournamentStatusResponse: c
                } = u.commonProto;
                let l = new T(r.URL_TYPE.APIMTT);
                l.onload = function() {
                    let o = l.response;
                    if (cc_mtt.vv.ConsoleLog.log("xhr status ", l.status), o) {
                        let r = new Uint8Array(o),
                            a = c.decode(r);
                        s.emit("requestMttTournamentStatus_onResponse", a, e), n(a), t(a, {
                            url: "/api/mtt/tournamentStatus"
                        })
                    }
                }, l.onerror = a, l.open("POST", `/api/mtt/tournamentStatus?token=${cc_mtt.vv.DataManager.token}`, !0), o.isNative && l.setRequestHeader("Content-Type", "application/octet-stream"), l.responseType = "arraybuffer";
                let p = new i;
                p.TournamentId = e, l.storeRequest(), l.send(i.encode(p).finish())
            }, e.requestMttTournamentPlayers = function(e, s, n) {
                const {
                    MttTournamentPlayersRequest: a
                } = u.commonProto, {
                    MttTournamentPlayersResponse: i
                } = u.commonProto;
                let c = new T(r.URL_TYPE.APIMTT);
                c.onload = function() {
                    let e = c.response;
                    if (cc_mtt.vv.ConsoleLog.log("xhr status ", c.status), e) {
                        let o = new Uint8Array(e),
                            n = i.decode(o);
                        s(n), t(n, {
                            url: "/api/mtt/tournamentPlayers"
                        })
                    }
                }, c.onerror = n, c.open("POST", `/api/mtt/tournamentPlayers?token=${cc_mtt.vv.DataManager.token}`, !0), o.isNative && c.setRequestHeader("Content-Type", "application/octet-stream"), c.responseType = "arraybuffer", c.send(a.encode(e).finish())
            }, e.requestGameRecordPPList = function(e, o, s, n, r, i, u = 5e3) {
                require(a.PineappleGlobal).printGameFlow(this.requestGameRecordPPList.name, "send request", [e, o, s], !1);
                let c = new T;
                c.responseType = "arraybuffer", c.onerror = i, c.timeout = u, c.onreadystatechange = () => {
                    if (4 == c.readyState && c.status >= 200 && c.status < 400) {
                        let i = c.response;
                        if (i) {
                            let u = new Uint8Array(i),
                                l = R.commonProto.Pineapple_Rounds.decode(u),
                                p = l.rounds;
                            require(a.PineappleGlobal).printGameFlow(this.requestGameRecordPPList.name, "received responses", [e, o, s, l, c], !1), p.sort((function(e, t) {
                                return t.created.getTime() - e.created.getTime()
                            }));
                            try {
                                n(l), p.length > 0 && 0 == p[0].ended && r(p[0].recordPath)
                            } catch (t) {
                                require(a.PineappleGlobal).printGameFlow(this.requestGameRecordPPList.name, "received responses with data error", [e, o, s, l, t], !1)
                            }
                            t(l, {
                                url: "/ppRecordList/"
                            })
                        } else require(a.PineappleGlobal).printGameFlow(this.requestGameRecordPPList.name, "empty responses", [], !1)
                    }
                };
                let l = `/ppRecordList/${e}?${o}&limit=${s}&ts=${Math.round(Date.now()/1e3)}`;
                c.open("GET", l, !0), c.send()
            }, e.requestGameRecordHoldemList = function(e, o, s, n, a = 5e3) {
                const {
                    userId: c,
                    roomId: l,
                    mttId: p,
                    uuid: d
                } = e;
                var m = new T(r.URL_TYPE.APIDATA);
                m.responseType = "arraybuffer", m.onerror = s, m.timeout = a, m.onload = () => {
                    if (4 == m.readyState && m.status >= 200 && m.status < 400) try {
                        var e = m.response;
                        if (e) {
                            let s = new Uint8Array(e);
                            e = u.commonProto.Holdem_Rounds.decode(s), cc_mtt.vv.ConsoleLog.log(e), o(e), t(e, {
                                url: "/holdemRecordList/"
                            })
                        } else s("requestGameRecordHoldemList empty response")
                    } catch (e) {
                        s(e)
                    } else s("requestGameRecordHoldemList status error")
                };
                let h = "";
                if (h = p ? `/holdemRecordList/${c}?mttId=${p}${l?"&roomId="+l:""}&ts=${Math.round(Date.now()/1e3)}` : `/holdemRecordList/${c}?sngId=${l}${d&&null!=d&&d.length?`&uuid=${d}`:""}&ts=${Math.round(Date.now()/1e3)}`, null != n && n.after) {
                    let e = n.after;
                    h += `&after=${encodeURIComponent(`${e.getFullYear()}-${e.getMonth()+1}-${e.getDate()} ${e.toTimeString().split(" ")[0]}`)}`
                }
                null != n && n.offset && (h += `&offset=${n.offset}`), null != n && n.limit && (h += `&limit=${n.limit}`), h = i.apiDataManagerSuffix + h, cc_mtt.vv.ConsoleLog.log(h), m.open("GET", h, !0), m.send()
            }, e.requestHoldemOneRoundData = function(e, o, s, n = 5e3) {
                let a = new T(r.URL_TYPE.FILE);
                a.responseType = "arraybuffer", a.onerror = e => {
                    cc_mtt.vv.ConsoleLog.log("requestHoldemRoundData onError", e), s && s(e)
                }, a.timeout = n, a.onload = () => {
                    if (4 == a.readyState && a.status >= 200 && a.status < 400) {
                        var e = a.response;
                        if (e) {
                            let s = new Uint8Array(e);
                            e = u.commonProto.Holdem_Record.decode(s), cc_mtt.vv.ConsoleLog.log("requestHoldemOneRoundData", e), o(e), t(e, {
                                url: "/requestHoldemOneRoundData/"
                            })
                        }
                    } else a.onerror()
                };
                let i = `/${e.replace("./","")}`;
                cc_mtt.vv.ConsoleLog.log("requestHoldemRoundData requesting url", i), a.open("GET", i, !0), a.send()
            }, e.requestGameRecordDataInHistory = function(e, o) {
                const s = e => new Promise(((o, s) => {
                    let n = new T;
                    n.responseType = "arraybuffer", n.onload = () => {
                        let r = n.response;
                        if (r) {
                            let e = new Uint8Array(r);
                            r = u.commonProto.Holdem_Record.decode(e), o(r), t(r, {
                                url: "/requestGameRecordDataInHistory/"
                            })
                        } else s(e)
                    };
                    let r = `/${e}`;
                    n.open("GET", r, !0), n.send()
                }));
                let n = [];
                for (let t = 0; t < e.length; t++) n.push(s(e[t]));
                Promise.all(n).then((e => {
                    cc_mtt.vv.ConsoleLog.log("check response", e), o(e)
                })).catch((e => {
                    cc_mtt.vv.ConsoleLog.log("err:", e)
                }))
            }, e.requestOneGameRecordData = function(e, o, s, n, r = 5e3) {
                let i = new T;
                i.responseType = "arraybuffer", i.onerror = function() {
                    n(o, e)
                }, i.timeout = r, i.onreadystatechange = () => {
                    if (4 == i.readyState && i.status >= 200 && i.status < 400) {
                        let r = i.response;
                        if (r) {
                            let u = new Uint8Array(r);
                            try {
                                let e = R.commonProto.Pineapple_Round_Record.decode(u);
                                require(a.PineappleGlobal).printGameFlow(this.requestOneGameRecordData.name, "received One round ", [e, i], !1), s(e, o), t(e, {
                                    url: "/requestOneGameRecordData/"
                                })
                            } catch (t) {
                                require(a.PineappleGlobal).printGameFlow(this.requestOneGameRecordData.name, "received One data error", [t], !1), n(o, e)
                            }
                        }
                    }
                };
                let u = `/${e.replace("./","")}`;
                i.open("GET", u, !0), i.send()
            }, e.requestGameRecordListData = function(e, o, s, n) {
                let r = [];
                require(a.PineappleGlobal).printGameFlow(this.requestGameRecordListData.name, "send request", [r], !1);
                for (let i in o) {
                    if (i >= e) break;
                    r[i] = new T, r[i].responseType = "arraybuffer", r[i].onerror = function() {
                        n(i, o[i])
                    }, r[i].onreadystatechange = () => {
                        if (4 == r[i].readyState && r[i].status >= 200 && r[i].status < 400) {
                            let e = r[i].response;
                            if (e) {
                                let u = new Uint8Array(e);
                                try {
                                    let e = R.commonProto.Pineapple_Round_Record.decode(u);
                                    require(a.PineappleGlobal).printGameFlow(this.requestGameRecordListData.name, "received responses round ", [e, r[i]], !1), s(e, i), t(e, {
                                        url: "/requestGameRecordListData/"
                                    })
                                } catch (e) {
                                    require(a.PineappleGlobal).printGameFlow(this.requestGameRecordListData.name, "received responses data error", [e], !1), n(i, o[i])
                                }
                            }
                        }
                    };
                    let u = `/${o[i].replace("./","")}`;
                    r[i].open("GET", u, !0), r[i].send()
                }
            }, e.requestGameRecords = function(e, o, s, n, r) {
                var a = new T,
                    i = [];
                const {
                    Pineapple_Round_Record: u
                } = R.commonProto;
                if (a.responseType = "json", a.onreadystatechange = () => {
                        if (4 == a.readyState && a.status >= 200 && a.status < 400) {
                            var e = a.response;
                            for (let o = 0; o < s && o < e.length; o++) ! function(o) {
                                i[o] = new T, i[o].responseType = "arraybuffer", i[o].onreadystatechange = function() {
                                    if (4 == i[o].readyState && i[o].status >= 200 && i[o].status < 400) {
                                        let s = i[o].response;
                                        if (s) {
                                            let n = new Uint8Array(s),
                                                a = u.decode(n);
                                            r(a, e.length, o), t(a, {
                                                url: "/ppRecords/"
                                            })
                                        }
                                    }
                                }, i[o].open("GET", `/${e[o]}`, !0), i[o].send()
                            }(o)
                        }
                    }, 0 == n) var c = `/ppRecords?userId=${e}&roomId=${o}&limit=0`;
                else c = `/ppRecords?userId=${e}&roomId=${o}&limit=0&after=${n}`;
                a.open("GET", c, !0), a.send()
            }, e.requestTransferRecord = function(e, t, o) {
                let s = new T;
                s.onerror = o, s.onload = function() {
                    let e = s.responseText;
                    cc_mtt.vv.ConsoleLog.log("xhr status ", s.status), e && t(JSON.parse(e))
                }, s.open("GET", `/impokerTransactions/${e}`, !0), s.send()
            }, e.sendPlayerAudioRecord = function(e, t, s, n, r) {
                let a = new T;
                a.onload = function(e) {
                    let t = a.response;
                    r(t)
                };
                let i = "/roomVoice";
                switch (s) {
                    case 1:
                        i += "/pp_";
                        break;
                    case 2:
                        i += "/ppLoop_";
                        break;
                    case 3:
                        i += "/mttPp_";
                        break;
                    case 4:
                        i += "/sngHoldem_";
                        break;
                    case 5:
                        i += "/mttHoldem_"
                }
                if (i += `${n}`, i += `/${cc_mtt.vv.DataManager.token}`, i += t, cc_mtt.vv.ConsoleLog.log(this.sendPlayerAudioRecord.name, i), a.open("POST", i, !0), o.isNative && a.setRequestHeader("Content-Type", "application/octet-stream"), a.responseType = "text", e instanceof Blob) {
                    var u, c = new FileReader;
                    c.onload = function(e) {
                        u = e.target.result;
                        let t = new Uint8Array(u);
                        a.send(t)
                    }, c.readAsArrayBuffer(e)
                } else a.send(e)
            }, e.requestJackpotRecord = function(e, o) {
                let s = new T;
                s.onload = function(n) {
                    let r = JSON.parse(s.response);
                    cc_mtt.vv.ConsoleLog.log(`Jackpot Record of ante ${e}:`, s.response, r), o(r), t(r, {
                        url: "/jackpotRecords/"
                    })
                }, s.open("GET", `/jackpotRecords/${e}`, !0), s.send()
            }, e.requestInvitationCode = function(e, o, s) {
                let n = new T;
                n.onerror = s, n.onload = function() {
                    let e = n.responseText;
                    if (cc_mtt.vv.ConsoleLog.log("xhr status ", n), e) {
                        cc_mtt.vv.ConsoleLog.log("xhr.responseText", e);
                        let s = JSON.parse(e);
                        o(s), t(s, {
                            url: "/invitationCode/"
                        })
                    }
                }, n.open("GET", `/invitationCode/${e}`, !0), n.send()
            }, e.requestPublicMessage = function(e, t) {
                let s = "";
                switch (o.language) {
                    case "en":
                        s = "EN";
                        break;
                    case "sc":
                        s = "SC";
                        break;
                    default:
                        s = "TC"
                }
                let n = new T;
                n.onerror = t, n.onload = function() {
                    if (4 == n.readyState && n.status >= 200 && n.status < 400) {
                        let t = n.responseText;
                        t && e(t.toString())
                    } else e(null)
                }, n.open("GET", `/messages/loginFailed${s}.txt`, !0), n.send()
            }, e.requestPlayersNickName = function(e, o, s) {
                var n = new T(r.URL_TYPE.APIWORLD);
                n.onerror = s, n.onreadystatechange = function() {
                    if (4 == n.readyState && n.status >= 200 && n.status < 400) {
                        var e = JSON.parse(n.responseText);
                        o(e), t(e, {
                            url: "/api/world/nicknames/"
                        })
                    } else o(null)
                }, n.open("GET", `/api/world/nicknames?${e.join()}`, !0), n.send()
            }, e.requestHotUpdateManifest = function(e) {
                var o = new XMLHttpRequest;
                o.onerror = e => {
                    cc_mtt.vv.ConsoleLog.log("http request error", e), r.isWebLastIndex() || (r.changeNextWebIndex(), o.open("GET", `${i.webUrl}/remote-assets/version.manifest`, !0), o.send())
                }, o.onreadystatechange = function() {
                    if (4 == o.readyState && o.status >= 200 && o.status < 400) try {
                        var s = JSON.parse(o.responseText);
                        e(s), t(s, {
                            url: "/remote-assets/version.manifest"
                        })
                    } catch (t) {
                        cc_mtt.vv.ConsoleLog.log("error:", t), e(null)
                    }
                }, o.open("GET", `${i.webUrl}/remote-assets/version.manifest`, !0), o.send()
            }, e.requestUserBroadcastMessages = function(e, s = 5) {
                return new Promise(((n, a) => {
                    let c = new T(r.URL_TYPE.APIWORLD);
                    c.onabort = () => {
                        a(`XHR_STATUS.${c.status}.onabort`)
                    }, c.onerror = () => {
                        a(`XHR_STATUS.${c.status}.onerror`)
                    }, c.onload = () => {
                        if (200 === c.status) {
                            let e = u.commonProto.UserBroadcastMessagesResponse.decode(new Uint8Array(c.response));
                            n(e), t(e, {
                                url: "/api/world/broadcastMessages"
                            })
                        } else a(`XHR_STATUS.${c.status}.onload`)
                    }, c.ontimeout = () => {
                        a(`XHR_STATUS.${c.status}.ontimeout`)
                    }, c.timeout = 1e3 * s, c.responseType = "arraybuffer", o.isNative && c.setRequestHeader("Content-Type", "application/octet-stream"), c.open("POST", `${i.httpRequestURL}/api/world/broadcastMessages`), c.send(u.commonProto.UserBroadcastMessagesRequest.encode(e).finish())
                }))
            }, e.requestUpdateBroadcastMsgResult = function(e, t = 5) {
                return new Promise(((s, n) => {
                    let a = new T(r.URL_TYPE.APIWORLD);
                    a.onabort = () => {
                        n(`XHR_STATUS.${a.status}.onabort`)
                    }, a.onerror = () => {
                        n(`XHR_STATUS.${a.status}.onerror`)
                    }, a.onload = () => {
                        a.status >= 200 && a.status < 400 ? s(u.commonProto.UserUpdateBroadcastMsgResponse.decode(new Uint8Array(a.response))) : n(`XHR_STATUS.${a.status}.onload`)
                    }, a.ontimeout = () => {
                        n(`XHR_STATUS.${a.status}.ontimeout`)
                    }, a.timeout = 1e3 * t, a.responseType = "arraybuffer", o.isNative && a.setRequestHeader("Content-Type", "application/octet-stream"), a.open("POST", "/api/world/updateBroadcastMsgResult"), cc_mtt.vv.ConsoleLog.log("UpdateBroadcastMsgResult send", e, t), a.send(u.commonProto.UserUpdateBroadcastMsgRequest.encode(e).finish())
                }))
            }, e.requestWebHead = function(e, t, s, n, a, i) {
                cc_mtt.vv.ConsoleLog.log("WebImageLoader requestWebHead");
                let u = new T(r.URL_TYPE.NONE);
                u.onload = function() {
                    cc_mtt.vv.ConsoleLog.log("WebImageLoader requestWebHead onload xhr", u, u.status, u.readyState);
                    var o = this.getResponseHeader("Last-Modified");
                    cc_mtt.vv.ConsoleLog.log("WebImageLoader requestWebHead onreadystatechange Last-Modified", o, this.getAllResponseHeaders()), t && t instanceof Function && t(e, o, n, a, i)
                }, u.onerror = s, u.open("HEAD", e, !0), o.isNative && u.setRequestHeader("Content-Type", "application/octet-stream"), u.send()
            }, e.requestWebImage = function(e, t, s, n, a, i) {
                cc_mtt.vv.ConsoleLog.log("WebImageLoader requestWebImage");
                let u = new T(r.URL_TYPE.NONE);
                u.onload = function() {
                    cc_mtt.vv.ConsoleLog.log("WebImageLoader requestWebImage xhr", u, u.status, u.readyState);
                    var o = this.getResponseHeader("Last-Modified");
                    cc_mtt.vv.ConsoleLog.log("WebImageLoader requestWebImage onreadystatechange Last-Modified", o, this.getAllResponseHeaders()), t && t instanceof Function && t(u.response, e, o, n, a, i)
                }, u.onerror = s, u.responseType = "arraybuffer", u.open("GET", e, !0), o.isNative && u.setRequestHeader("Content-Type", "application/octet-stream"), u.send()
            }, e.requestAppVersion = function(e, t) {
                cc_mtt.vv.ConsoleLog.log("requestAppVersion");
                var s = new T(r.URL_TYPE.WEB);
                s.timeout = 3e3, s.onload = function() {
                    if (4 == s.readyState && s.status >= 200 && s.status < 400) {
                        var t = s.responseText;
                        e(t)
                    } else e(null)
                }, s.onerror = t, o.os === o.OS.IOS ? s.open("GET", "/appfile/version_ios", !0) : s.open("GET", "/appfile/version_android", !0), s.send()
            }, e.requestServerStatus = function(e, t) {
                var o = new T(r.URL_TYPE.WEB);
                o.onreadystatechange = function() {
                    if (4 == o.readyState && o.status >= 200 && o.status < 400) {
                        var t = o.response;
                        e(t)
                    }
                }, o.onerror = t, o.open("GET", "/checkServerStatus", !0), o.send()
            }, e.requestGameResults = function(e, s, n) {
                let a = new T(r.URL_TYPE.APIDATA);
                a.responseType = "arraybuffer", a.onload = function() {
                    if (200 === a.status) {
                        if (a.response) {
                            let e = u.commonProto.Game_Results_Response.decode(new Uint8Array(a.response));
                            s(e), t(e, {
                                url: "/gameResults"
                            })
                        }
                    } else cc_mtt.vv.ConsoleLog.log("xhr status:", a.status), n && n()
                }, a.onerror = n, a.storeRequest(), a.open("POST", i.apiDataManagerSuffix + "/gameResults", !0), o.isNative && a.setRequestHeader("Content-Type", "application/octet-stream"), a.timeout = 15e3, a.send(u.commonProto.Game_Results_Request.encode(e).finish())
            }, e.requestGameResultDetail = function(e, s, n) {
                let a = new T(r.URL_TYPE.APIDATA);
                a.responseType = "arraybuffer", a.onload = function() {
                    if (200 === a.status) {
                        if (a.response) {
                            let e = u.commonProto.Game_Result_Detail_Response.decode(new Uint8Array(a.response));
                            s(e), t(e, {
                                url: "/gameResultDetail"
                            })
                        }
                    } else cc_mtt.vv.ConsoleLog.log("xhr status:", a.status), n && n()
                }, a.onerror = n, a.storeRequest(), a.open("POST", i.apiDataManagerSuffix + "/gameResultDetail", !0), o.isNative && a.setRequestHeader("Content-Type", "application/octet-stream"), a.timeout = 15e3, a.send(u.commonProto.Game_Result_Detail_Request.encode(e).finish())
            }, e.requestGameResultDetailList = function(e, s, n) {
                let a = new T(r.URL_TYPE.APIDATA);
                a.responseType = "arraybuffer", a.onload = function() {
                    if (200 === a.status) {
                        if (a.response) {
                            let e = u.commonProto.Game_Result_Detail_List_Response.decode(new Uint8Array(a.response));
                            s(e), t(e, {
                                url: "/gameResultDetailList"
                            })
                        }
                    } else cc_mtt.vv.ConsoleLog.log("xhr status:", a.status), n && n()
                }, a.onerror = n, a.storeRequest(), a.open("POST", i.apiDataManagerSuffix + "/gameResultDetailList", !0), o.isNative && a.setRequestHeader("Content-Type", "application/octet-stream"), a.timeout = 15e3, a.send(u.commonProto.Game_Result_Detail_List_Request.encode(e).finish())
            }, e.requestGameResultRounds = function(e, s, n) {
                let a = new T(r.URL_TYPE.APIDATA);
                a.responseType = "arraybuffer", a.onload = function() {
                    if (200 === a.status) {
                        if (a.response) {
                            let e = u.commonProto.Game_Result_Rounds_Response.decode(new Uint8Array(a.response));
                            s(e), t(e, {
                                url: "/gameResultRounds"
                            })
                        }
                    } else cc_mtt.vv.ConsoleLog.log("xhr status:", a.status), n && n()
                }, a.onerror = n, a.storeRequest(), a.open("POST", i.apiDataManagerSuffix + "/gameResultRounds", !0), o.isNative && a.setRequestHeader("Content-Type", "application/octet-stream"), a.timeout = 15e3, a.send(u.commonProto.Game_Result_Rounds_Request.encode(e).finish())
            }, e.requestGameResultRoundsByMttIdUserId = function(e, s, n) {
                let a = new T(r.URL_TYPE.APIDATA, "requestGameResultRoundsByMttIdUserId");
                a.responseType = "arraybuffer", a.onload = function() {
                    if (200 === a.status) {
                        if (a.response) {
                            let e = u.commonProto.Game_Result_Rounds_Response.decode(new Uint8Array(a.response));
                            s(e), t(e, {
                                url: "/gameResultRoundsByMttIdUserId"
                            })
                        }
                    } else cc_mtt.vv.ConsoleLog.log("xhr status:", a.status), n && n()
                }, a.onerror = n, a.storeRequest(), a.open("POST", i.apiDataManagerSuffix + "/gameResultRoundsByMttIdUserId", !0), o.isNative && a.setRequestHeader("Content-Type", "application/octet-stream"), a.timeout = 15e3, a.send(u.commonProto.Game_Result_Rounds_By_MttId_UserId_Request.encode(e).finish())
            }, e.requestAddUserFavouriteRound = function(e, s, n) {
                let a = new T(r.URL_TYPE.APIDATA);
                a.responseType = "arraybuffer", a.onload = function() {
                    if (200 === a.status) {
                        if (a.response) {
                            let e = u.commonProto.Add_User_Favourite_Round_Response.decode(new Uint8Array(a.response));
                            s(e), t(e, {
                                url: "/addUserFavouriteRound"
                            })
                        }
                    } else cc_mtt.vv.ConsoleLog.log("xhr status:", a.status), n && n()
                }, a.onerror = n, a.storeRequest(), a.open("POST", i.apiDataManagerSuffix + "/addUserFavouriteRound", !0), o.isNative && a.setRequestHeader("Content-Type", "application/octet-stream"), a.timeout = 15e3, a.send(u.commonProto.Add_User_Favourite_Round_Request.encode(e).finish())
            }, e.requestRemoveUserFavouriteRound = function(e, s, n) {
                let a = new T(r.URL_TYPE.APIDATA);
                a.responseType = "arraybuffer", a.onload = function() {
                    if (200 === a.status) {
                        if (a.response) {
                            let e = u.commonProto.Remove_User_Favourite_Round_Response.decode(new Uint8Array(a.response));
                            s(e), t(e, {
                                url: "/removeUserFavouriteRound"
                            })
                        }
                    } else cc_mtt.vv.ConsoleLog.log("xhr status:", a.status), n && n()
                }, a.onerror = n, a.storeRequest(), a.open("POST", i.apiDataManagerSuffix + "/removeUserFavouriteRound", !0), o.isNative && a.setRequestHeader("Content-Type", "application/octet-stream"), a.timeout = 15e3, a.send(u.commonProto.Remove_User_Favourite_Round_Request.encode(e).finish())
            }, e.requestListUserFavouriteRounds = function(e, s, n) {
                let a = new T(r.URL_TYPE.APIDATA);
                a.responseType = "arraybuffer", a.onload = function() {
                    if (200 === a.status) {
                        if (a.response) {
                            let e = u.commonProto.List_User_Favourite_Rounds_Response.decode(new Uint8Array(a.response));
                            s(e), t(e, {
                                url: "/listUserFavouriteRounds"
                            })
                        }
                    } else cc_mtt.vv.ConsoleLog.log("xhr status:", a.status), n && n()
                }, a.onerror = n, a.storeRequest(), a.open("POST", i.apiDataManagerSuffix + "/listUserFavouriteRounds", !0), o.isNative && a.setRequestHeader("Content-Type", "application/octet-stream"), a.timeout = 15e3, a.send(u.commonProto.List_User_Favourite_Rounds_Request.encode(e).finish())
            }, e.requestAssociationDetail = function(e, s, n) {
                let a = new T(r.URL_TYPE.APIDATA);
                a.responseType = "arraybuffer", a.onload = function() {
                    if (200 === a.status)
                        if (a.response) {
                            let e = u.commonProto.Association_Detail_Response.decode(new Uint8Array(a.response));
                            s(e), t(e, {
                                url: "/Association_Detail_Request"
                            })
                        } else cc_mtt.vv.ConsoleLog.log("empty response::assoDetail", a.response), n();
                    else cc_mtt.vv.ConsoleLog.log("xhr status:", a.status), n && n()
                }, a.onerror = n, a.storeRequest(), a.open("POST", i.apiDataManagerSuffix + `/Association_Detail_Request?token=${cc_mtt.vv.DataManager.token}`, !0), o.isNative && a.setRequestHeader("Content-Type", "application/octet-stream"), a.timeout = 15e3, a.send(u.commonProto.Association_Detail_Request.encode(e).finish())
            }, e.requestAssociationStatistic = function(e, s, n) {
                let a = new T(r.URL_TYPE.APIDATA);
                a.responseType = "arraybuffer", a.onload = function() {
                    if (200 === a.status)
                        if (a.response) {
                            let e = u.commonProto.Association_Statistic_Response.decode(new Uint8Array(a.response));
                            s(e), t(e, {
                                url: "/Association_Statistic_Request"
                            })
                        } else cc_mtt.vv.ConsoleLog.log("empty response::assoStat", a.response), n();
                    else cc_mtt.vv.ConsoleLog.log("xhr status:", a.status), n && n()
                }, a.onerror = n, a.storeRequest(), a.open("POST", i.apiDataManagerSuffix + `/Association_Statistic_Request?token=${cc_mtt.vv.DataManager.token}`, !0), o.isNative && a.setRequestHeader("Content-Type", "application/octet-stream"), a.timeout = 15e3, a.send(u.commonProto.Association_Statistic_Request.encode(e).finish())
            }, e.requestAssociationMemberList = function(e, s, n) {
                let a = new T(r.URL_TYPE.APIDATA);
                a.responseType = "arraybuffer", a.onload = function() {
                    if (200 === a.status)
                        if (a.response) {
                            let e = u.commonProto.Association_Member_List_Response.decode(new Uint8Array(a.response));
                            s(e), t(e, {
                                url: "/Association_Member_List_Request"
                            })
                        } else cc_mtt.vv.ConsoleLog.log("empty response::assoMemList", a.response), n();
                    else cc_mtt.vv.ConsoleLog.log("xhr status:", a.status), n && n()
                }, a.onerror = n, a.storeRequest(), a.open("POST", i.apiDataManagerSuffix + `/Association_Member_List_Request?token=${cc_mtt.vv.DataManager.token}`, !0), o.isNative && a.setRequestHeader("Content-Type", "application/octet-stream"), a.timeout = 15e3, a.send(u.commonProto.Association_Member_List_Request.encode(e).finish())
            }, e.requestAssociationMemberDetail = function(e, s, n) {
                let a = new T(r.URL_TYPE.APIDATA);
                a.responseType = "arraybuffer", a.onload = function() {
                    if (200 === a.status) {
                        if (a.response) {
                            let e = u.commonProto.Association_Member_Detail_Response.decode(new Uint8Array(a.response));
                            s(e), t(e, {
                                url: "/Association_Member_Detail_Request"
                            })
                        }
                    } else cc_mtt.vv.ConsoleLog.log("xhr status:", a.status), n && n()
                }, a.onerror = n, a.storeRequest(), a.open("POST", i.apiDataManagerSuffix + `/Association_Member_Detail_Request?token=${cc_mtt.vv.DataManager.token}`, !0), o.isNative && a.setRequestHeader("Content-Type", "application/octet-stream"), a.timeout = 15e3, a.send(u.commonProto.Association_Member_Detail_Request.encode(e).finish())
            }, e.requestAssociationMemberGameDetail = function(e, s, n) {
                let a = new T(r.URL_TYPE.APIDATA);
                a.responseType = "arraybuffer", a.onload = function() {
                    if (200 === a.status) {
                        if (a.response) {
                            let e = u.commonProto.Association_Member_Game_Detail_Response.decode(new Uint8Array(a.response));
                            s(e), t(e, {
                                url: "/Association_Member_Game_Detail_Request"
                            })
                        }
                    } else cc_mtt.vv.ConsoleLog.log("xhr status:", a.status), n && n()
                }, a.onerror = n, a.storeRequest(), a.open("POST", i.apiDataManagerSuffix + `/Association_Member_Game_Detail_Request?token=${cc_mtt.vv.DataManager.token}`, !0), o.isNative && a.setRequestHeader("Content-Type", "application/octet-stream"), a.timeout = 15e3, a.send(u.commonProto.Association_Member_Game_Detail_Request.encode(e).finish())
            }, e.requestAssociationDownlineList = function(e, s, n) {
                let a = new T(r.URL_TYPE.APIDATA);
                a.responseType = "arraybuffer", a.onload = function() {
                    if (200 === a.status)
                        if (a.response) {
                            let e = u.commonProto.Association_Downline_List_Response.decode(new Uint8Array(a.response));
                            s(e), t(e, {
                                url: "/Association_Downline_List_Request"
                            })
                        } else cc_mtt.vv.ConsoleLog.log("empty response::assoDownList", a.response), n();
                    else cc_mtt.vv.ConsoleLog.log("xhr status:", a.status), n && n()
                }, a.onerror = n, a.storeRequest(), a.open("POST", i.apiDataManagerSuffix + `/Association_Downline_List_Request?token=${cc_mtt.vv.DataManager.token}`, !0), o.isNative && a.setRequestHeader("Content-Type", "application/octet-stream"), a.timeout = 15e3, a.send(u.commonProto.Association_Downline_List_Request.encode(e).finish())
            }, e.requestAssociationWithdrawRecords = function(e, s, n) {
                let a = new T(r.URL_TYPE.APIDATA);
                a.responseType = "arraybuffer", a.onload = function() {
                    if (200 === a.status) {
                        if (a.response) {
                            let e = u.commonProto.Association_Withdraw_Records_Response.decode(new Uint8Array(a.response));
                            s(e), t(e, {
                                url: "/Association_Withdraw_Records_Request"
                            })
                        }
                    } else cc_mtt.vv.ConsoleLog.log("xhr status:", a.status), n && n()
                }, a.onerror = n, a.storeRequest(), a.open("POST", i.apiDataManagerSuffix + `/Association_Withdraw_Records_Request?token=${cc_mtt.vv.DataManager.token}`, !0), o.isNative && a.setRequestHeader("Content-Type", "application/octet-stream"), a.timeout = 15e3, a.send(u.commonProto.Association_Withdraw_Records_Request.encode(e).finish())
            }, e.requestAssociationMemberShortList = function(e, s, n) {
                let a = new T(r.URL_TYPE.APIDATA);
                a.responseType = "arraybuffer", a.onload = function() {
                    if (200 === a.status) {
                        if (a.response) {
                            let e = u.commonProto.Association_Member_List_Response.decode(new Uint8Array(a.response));
                            s(e), t(e, {
                                url: "/Association_Member_Short_List_Request"
                            })
                        }
                    } else cc_mtt.vv.ConsoleLog.log("xhr status:", a.status), n && n()
                }, a.onerror = n, a.storeRequest(), a.open("POST", i.apiDataManagerSuffix + `/Association_Member_Short_List_Request?token=${cc_mtt.vv.DataManager.token}`, !0), o.isNative && a.setRequestHeader("Content-Type", "application/octet-stream"), a.timeout = 15e3, a.send(u.commonProto.Association_Member_Short_List_Request.encode(e).finish())
            }, e.requestMttMultiTable = function(e, n) {
                const {
                    MttMultiTableRequest: a
                } = u.commonProto, {
                    MttMultiTableResponse: i
                } = u.commonProto;
                let c = new T(r.URL_TYPE.APIMTT);
                c.onload = function() {
                    let o = c.response;
                    if (cc_mtt.vv.ConsoleLog.log("xhr status ", c.status), o) {
                        let n = new Uint8Array(o),
                            r = i.decode(n);
                        s.emit("requestMttMultiTable_onResponse", r), e(r), t(r, {
                            url: "/api/mtt/multiTablePlayers"
                        })
                    }
                }, c.onerror = n, c.open("POST", `/api/mtt/multiTablePlayers?token=${cc_mtt.vv.DataManager.token}`, !0), c.timeout = 15e3, c.ontimeout = () => {
                    null == n || n()
                }, o.isNative && c.setRequestHeader("Content-Type", "application/octet-stream"), c.responseType = "arraybuffer";
                let l = new a;
                l.UserId = cc_mtt.vv.DataManager.userId, c.storeRequest(), c.send(a.encode(l).finish())
            }, e.requestDownloadURL = function(e, t) {
                var o = new T(r.URL_TYPE.WEB);
                o.timeout = 3e3, o.onload = function() {
                    if (4 == o.readyState && o.status >= 200 && o.status < 400) {
                        var t = o.responseText;
                        cc_mtt.vv.ConsoleLog.log("requestDownloadURL", t.split(",")), e(t)
                    } else o.errorAction()
                }, o.onerror = t, o.open("GET", "/appfile/download_path", !0), o.send()
            }, e.checkDownloadURL = function(e, t) {
                var o = new T(r.URL_TYPE.DOWNLOAD);
                o.timeout = 1e4, o.onload = function() {
                    if (4 == o.readyState && o.status >= 200 && o.status < 400) {
                        var t = o.responseText;
                        cc_mtt.vv.ConsoleLog.log("checkDownloadURL", t), e(t)
                    } else o.errorAction()
                }, o.onerror = t, o.open("GET", "/appfile/test", !0), o.send()
            }, e.checkDownloadURLList = function(e, t, o, s) {
                var n = new XMLHttpRequest;
                n.timeout = 1e4, n.onload = function() {
                    if (4 == n.readyState && n.status >= 200 && n.status < 400) {
                        var r = n.responseText;
                        cc_mtt.vv.ConsoleLog.log("checkDownloadURLList", r), o(e[t])
                    } else t < e.length - 1 ? v.checkDownloadURLList(e, t + 1, o, s) : s()
                }, t < e.length - 1 ? (n.onerror = () => {
                    v.checkDownloadURLList(e, t + 1, o, s)
                }, n.ontimeout = () => {
                    v.checkDownloadURLList(e, t + 1, o, s)
                }) : (n.onerror = s, n.ontimeout = s), cc_mtt.vv.ConsoleLog.log("checkDownloadURLList", e[t] + "/appfile/test"), n.open("GET", e[t] + "/appfile/test", !0), n.send()
            }, e.requestUrlConfigVersion = function(e, t) {
                var o = new T(r.URL_TYPE.CONFIG, "", !1, !1);
                o.timeout = 1e4, o.onload = function() {
                    if (4 == o.readyState && o.status >= 200 && o.status < 400) {
                        var t = o.responseText;
                        e(t)
                    } else o.errorAction()
                }, o.onerror = t, o.open("GET", "/appfile/url_config_version", !0), o.send()
            }, e.requestUrlConfig = function(e, t) {
                var o = new T(r.URL_TYPE.CONFIG, "", !1, !1);
                o.timeout = 1e4, o.onload = function() {
                    if (4 == o.readyState && o.status >= 200 && o.status < 400) {
                        var t = o.responseText;
                        e(t)
                    } else o.errorAction()
                }, o.onerror = t, o.open("GET", "/appfile/url_config", !0), o.send()
            }, e.checkURL = function(e) {
                var t = new XMLHttpRequest;
                t.timeout = 1e4, t.onload = function() {
                    cc_mtt.vv.ConsoleLog.log("checkURL", e, t.readyState, t.status)
                }, t.onerror = function() {
                    cc_mtt.vv.ConsoleLog.log("checkURL error", e, t.readyState, t.status)
                }, t.open("GET", e, !0), t.send()
            }, e.uploadWebLogs = function(e, t, o) {
                var s = new XMLHttpRequest;
                s.timeout = 1e4, s.onload = function() {
                    if (4 == s.readyState && s.status >= 200 && s.status < 400) {
                        var e = s.responseText;
                        t(e)
                    } else o()
                }, s.onerror = o, s.open("POST", "http://120.25.145.39:31380/webUploadLogs", !0), s.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), s.send(JSON.stringify({
                    id: cc_mtt.vv.DataManager.userData ? cc_mtt.vv.DataManager.userData.ForeignId ? cc_mtt.vv.DataManager.userData.ForeignId : cc_mtt.vv.DataManager.userId : "login",
                    logs: encodeURIComponent(e)
                }))
            }, e.requestUserToolInBackPack = function(e, s) {
                const {
                    User_Tool_In_Backpacks_Request: n
                } = u.commonProto;
                let a = new T(r.URL_TYPE.APIDATA);
                a.responseType = "arraybuffer", a.onload = function() {
                    if (200 === a.status)
                        if (a.response) {
                            let o = u.commonProto.User_Tool_In_Backpacks_Response.decode(new Uint8Array(a.response));
                            e(o), t(o, {
                                url: "/userToolInBackPack"
                            })
                        } else cc_mtt.vv.ConsoleLog.log("empty response::UserToolInBackPack", a.response), s && s({
                            status: a.status,
                            readyState: a.readyState
                        });
                    else cc_mtt.vv.ConsoleLog.log("xhr status:", a.status), s && s({
                        status: a.status,
                        readyState: a.readyState
                    })
                }, a.onerror = s, a.storeRequest(), a.open("POST", i.apiDataManagerSuffix + `/userToolInBackPack?token=${cc_mtt.vv.DataManager.token}`, !0), o.isNative && a.setRequestHeader("Content-Type", "application/octet-stream"), a.timeout = 15e3, a.send(u.commonProto.User_Tool_In_Backpacks_Request.encode(new n).finish())
            }, e.requestToolInfo = function(e, s, n) {
                let a = new T(r.URL_TYPE.APIDATA);
                a.responseType = "arraybuffer", a.onload = function() {
                    if (200 === a.status)
                        if (a.response) {
                            let e = u.commonProto.Tool_Info_Response.decode(new Uint8Array(a.response));
                            s(e), t(e, {
                                url: "/toolInfo"
                            })
                        } else cc_mtt.vv.ConsoleLog.log("empty response::Tool_Info", a.response), n && n({
                            status: a.status,
                            readyState: a.readyState,
                            detail: e
                        });
                    else cc_mtt.vv.ConsoleLog.log("xhr status:", a.status), n && n({
                        status: a.status,
                        readyState: a.readyState,
                        detail: e
                    })
                }, a.onerror = n, a.storeRequest(), a.open("POST", i.apiDataManagerSuffix + `/toolInfo?token=${cc_mtt.vv.DataManager.token}`, !0), o.isNative && a.setRequestHeader("Content-Type", "application/octet-stream"), a.timeout = 15e3, a.send(u.commonProto.Tool_Info_Request.encode(e).finish())
            }, e.requestToolInBackpackGift = function(e, s, n) {
                let a = new T(r.URL_TYPE.APIWORLD);
                a.responseType = "arraybuffer", a.onload = function() {
                    if (200 === a.status)
                        if (a.response) {
                            let e = u.commonProto.Tool_In_Backpack_Gift_Response.decode(new Uint8Array(a.response));
                            s(e), t(e, {
                                url: "/api/world/toolInBackPackGift"
                            })
                        } else cc_mtt.vv.ConsoleLog.log("empty response::ToolInBackpackGift", a.response), n && n({
                            status: a.status,
                            readyState: a.readyState,
                            detail: e
                        });
                    else cc_mtt.vv.ConsoleLog.log("xhr status:", a.status), n && n({
                        status: a.status,
                        readyState: a.readyState,
                        detail: e
                    })
                }, a.onerror = n, a.storeRequest(), a.open("POST", `/api/world/toolInBackPackGift?token=${cc_mtt.vv.DataManager.token}`, !0), o.isNative && a.setRequestHeader("Content-Type", "application/octet-stream"), a.timeout = 15e3, a.send(u.commonProto.Tool_In_Backpack_Gift_Request.encode(e).finish())
            }, e.requestUserSearch = function(e, s, n) {
                const {
                    User_Search_Request: a,
                    User_Search_Response: c
                } = u.commonProto;
                let l = new T(r.URL_TYPE.APIDATA);
                l.responseType = "arraybuffer", l.onload = function() {
                    if (200 === l.status)
                        if (l.response) {
                            let e = c.decode(new Uint8Array(l.response));
                            s(e), t(e, {
                                url: "/userSearch"
                            })
                        } else cc_mtt.vv.ConsoleLog.log("empty response::Tool_Info", l.response), n();
                    else cc_mtt.vv.ConsoleLog.log("xhr status:", l.status), n && n()
                }, l.onerror = () => {
                    n && n({
                        status: l.status,
                        readyState: l.readyState,
                        detail: "NetworkError"
                    })
                }, l.ontimeout = () => {
                    n && n({
                        status: l.status,
                        readyState: l.readyState,
                        detail: "TimeOut"
                    })
                }, l.storeRequest(), l.open("POST", i.apiDataManagerSuffix + `/userSearch?token=${cc_mtt.vv.DataManager.token}`, !0), o.isNative && l.setRequestHeader("Content-Type", "application/octet-stream"), l.timeout = 15e3, l.send(a.encode(e).finish())
            }, e.requestUserNote = function(e, o, s) {
                let n = new T(r.URL_TYPE.APIWORLD);
                n.responseType = "arraybuffer", n.onload = () => {
                    if (200 === n.status) {
                        let e = u.commonProto.UserNoteResponse.decode(new Uint8Array(n.response));
                        o(e), t(e, {
                            url: "/api/world/userNote"
                        })
                    } else s && s()
                }, n.open("POST", `/api/world/userNote?token=${cc_mtt.vv.DataManager.token}`, !0), n.send(u.commonProto.UserNoteRequest.encode(u.commonProto.UserNoteRequest.create({
                    UserId: e
                })).finish())
            }, e.updateUserNote = function(e, o, s, n) {
                let a = new T(r.URL_TYPE.APIWORLD);
                a.responseType = "arraybuffer", a.onload = () => {
                    if (200 === a.status) {
                        let e = u.commonProto.UpdateUserNoteResponse.decode(new Uint8Array(a.response));
                        s(e), t(e, {
                            url: "/api/world/updateUserNote"
                        })
                    } else n && n()
                }, a.open("POST", `/api/world/updateUserNote?token=${cc_mtt.vv.DataManager.token}`, !0), a.send(u.commonProto.UpdateUserNoteRequest.encode(u.commonProto.UpdateUserNoteRequest.create({
                    UserId: e,
                    Note: o
                })).finish())
            }, e.requestEnterSngRoomLevel = function(e) {
                return new Promise(((t, o) => {
                    let n = new T;
                    n.responseType = "arraybuffer", n.onload = () => {
                        const r = {
                            xhrStatus: n.status ? n.status : "unknown",
                            levelId: e.levelId ? e.levelId : "unknown",
                            count: e.count ? e.count : "unknown",
                            lat: e.lat ? e.lat : "unknown",
                            lng: e.lng ? e.lng : "unknown",
                            geoComplianceToken: e.geoComplianceToken ? e.geoComplianceToken : "unknown",
                            IsDesktop: e.IsDesktop ? e.IsDesktop : "unknown",
                            url: "enterSngRoomLevelReq"
                        };
                        if (200 === n.status) {
                            const o = u.mttPro.EnterSngRoomLevelRes.decode(new Uint8Array(n.response));
                            s.emit("requestSngPlayerSignUp_onResponse", o, e), t(o), c(o, r, !0)
                        } else o(), c({
                            code: n.status
                        }, r, !0)
                    }, n.open("POST", i.apiSngSuffix + `/enterSngRoomLevelReq?token=${cc_mtt.vv.DataManager.token}`, !0), n.send(u.mttPro.EnterSngRoomLevelReq.encode(e).finish())
                }))
            }, e.requestSngRoomLevelInfo = function() {
                return new Promise(((e, t) => {
                    let o = new T;
                    o.responseType = "arraybuffer", o.onload = () => {
                        if (200 === o.status) {
                            const t = u.mttPro.SngRoomLevelInfoRes.decode(new Uint8Array(o.response));
                            e(t), c(t, {
                                url: "sngRoomLevelInfoReq"
                            })
                        } else t()
                    }, o.open("GET", i.apiSngSuffix + `/sngRoomLevelInfoReq?token=${cc_mtt.vv.DataManager.token}`, !0), o.timeout = 1e4, o.ontimeout = () => {
                        t()
                    }, o.onerror = () => {
                        t()
                    }, o.send()
                }))
            }, e.requestJSNGMultiTable = function(e, n) {
                const {
                    MttMultiTableRequest: a
                } = u.commonProto, {
                    MttMultiTableResponse: i
                } = u.commonProto;
                let c = new T(r.URL_TYPE.APIMTT);
                c.onload = function() {
                    let o = c.response;
                    if (console.log(`xhr status: ${c.status}`), o) {
                        let n = new Uint8Array(o);
                        const r = i.decode(n);
                        s.emit("requestJsngMultiTable_onResponse", r), e(r), t(r, {
                            url: "/api/sng/multiTablePlayers"
                        })
                    }
                }, c.onerror = n, c.open("POST", `/api/sng/multiTablePlayers?token=${cc_mtt.vv.DataManager.token}`, !0), o.isNative && c.setRequestHeader("Content-Type", "application/octet-stream"), c.responseType = "arraybuffer";
                let l = new a;
                l.UserId = cc_mtt.vv.DataManager.userId, c.storeRequest(), c.send(a.encode(l).finish())
            }, e.requestMttTournamentList = function(e, o, s = {}, n = 5e3) {
                const {
                    rows: a,
                    mfid: i,
                    lang: c = cc_mtt.vv.DataManager.i18DataMap[cc_mtt.vv.DataManager.lang] || cc_mtt.vv.DataManager.lang
                } = s;
                let l = new T(r.URL_TYPE.APIMTT),
                    p = {
                        platForm: f.instance.platform
                    };
                l.responseType = "arraybuffer", l.timeout = n, l.onload = () => {
                    if (200 === l.status) {
                        const o = u.commonProto.Mtt_Tournament_List_Response.decode(new Uint8Array(l.response));
                        e(o), t(o, {
                            url: "/api/mtt/tournamentList"
                        })
                    } else o && o()
                }, l.onerror = o;
                let d = `/api/mtt/tournamentList?token=${cc_mtt.vv.DataManager.token}&newUI=true`;
                a && (d += `&rows=${a}`), i && (d += `&mfid=${i}`), c && (d += `&lang=${c}`), l.open("POST", d, !0), l.send(u.commonProto.Mtt_Tournament_List_Request.encode(u.commonProto.Mtt_Tournament_List_Request.create(p)).finish())
            }, e.requestWPTGroupCToggle = function(e, s) {
                let n = new T(r.URL_TYPE.APIDATA);
                n.responseType = "json", n.onload = function() {
                    200 === n.status ? (console.log("updateEventCount::", n.response), n.response && (e(n.response), t(n.response, {
                        url: "/api/dataManager/getWptGroupCInfo"
                    }))) : console.log("xhr status:", n.status)
                }, n.onerror = s, n.open("POST", `/api/dataManager/getWptGroupCInfo?token=${cc_mtt.vv.DataManager.token}`, !0), o.isNative && n.setRequestHeader("Content-Type", "application/octet-stream"), n.send()
            }, e.requestMttBroadcastList = function(e, o) {
                let s = new T(r.URL_TYPE.APIMTT);
                s.responseType = "arraybuffer", s.onload = () => {
                    if (200 === s.status) {
                        const o = u.commonProto.Mtt_Broadcast_List_Response.decode(new Uint8Array(s.response));
                        e(o), t(o, {
                            url: "/api/mtt/broadcastTournamentList"
                        })
                    } else o && o()
                }, s.open("POST", `/api/mtt/broadcastTournamentList?token=${cc_mtt.vv.DataManager.token}`, !0), s.send()
            }, e.requestMttPlayerCount = function(e, o) {
                let s = new T(r.URL_TYPE.APIMTT);
                s.responseType = "arraybuffer", s.onload = () => {
                    if (200 === s.status) {
                        const o = u.commonProto.Mtt_Player_Count_Response.decode(new Uint8Array(s.response));
                        e(o), t(o, {
                            url: "/api/mtt/playerCount"
                        })
                    } else o && o()
                }, s.open("GET", `/api/mtt/playerCount?token=${cc_mtt.vv.DataManager.token}`, !0), s.send()
            }, e.requestCheckUserWorldCupGuess = function(e, o, s) {
                let n = new T;
                n.responseType = "arraybuffer", n.onload = () => {
                    if (200 === n.status) {
                        const e = u.commonProto.Check_User_WorldCupGuess_Response.decode(new Uint8Array(n.response));
                        o(e), t(e, {
                            url: "/checkUserWorldCupGuess"
                        })
                    } else s && s()
                }, n.open("POST", i.apiDataManagerSuffix + `/checkUserWorldCupGuess?token=${cc_mtt.vv.DataManager.token}`, !0), n.send(u.commonProto.Check_User_WorldCupGuess_Request.encode(u.commonProto.Check_User_WorldCupGuess_Request.create(e)).finish())
            }, e.requestChoiceWorldCupGuessTeam = function(e, o, s) {
                let n = new T;
                n.responseType = "arraybuffer", n.onload = () => {
                    if (200 === n.status) {
                        const e = u.commonProto.Choice_WorldCupGuess_Team_Response.decode(new Uint8Array(n.response));
                        o(e), t(e, {
                            url: "/choiceWorldCupGuessTeam"
                        })
                    } else s && s()
                }, n.open("POST", i.apiDataManagerSuffix + `/choiceWorldCupGuessTeam?token=${cc_mtt.vv.DataManager.token}`, !0), n.send(u.commonProto.Choice_WorldCupGuess_Team_Request.encode(u.commonProto.Choice_WorldCupGuess_Team_Request.create(e)).finish())
            }, e.requestPlayerJoinedTournaments = function(e, s) {
                const {
                    Player_Joined_Tournaments_Response: n
                } = u.commonProto;
                let a = new T(r.URL_TYPE.APIMTT);
                a.onload = function() {
                    let o = a.response;
                    if (cc_mtt.vv.ConsoleLog.log("xhr status ", a.status), o) {
                        let s = new Uint8Array(o);
                        const r = n.decode(s);
                        cc_mtt.vv.ConsoleLog.log("requestPlayerJoinedTournaments", r), e(r), t(r, {
                            url: "/api/mtt/playerJoinedTournaments"
                        })
                    }
                }, a.onerror = s, a.open("POST", `/api/mtt/playerJoinedTournaments?token=${cc_mtt.vv.DataManager.token}`, !0), o.isNative && a.setRequestHeader("Content-Type", "application/octet-stream"), a.responseType = "arraybuffer", a.send()
            }, e.requestRoomPlayers = function(e, s, n) {
                let a = new T(r.URL_TYPE.APIMTT);
                a.onload = function() {
                    let e = a.response;
                    if (e) {
                        let o = new Uint8Array(e);
                        const n = u.commonProto.MttRoomPlayerResponse.decode(o);
                        cc_mtt.vv.ConsoleLog.log("requestRoomPlayers", n), s(n), t(n, {
                            url: "/api/mtt/roomPlayers"
                        })
                    }
                }, a.onerror = n;
                const i = u.commonProto.MttRoomPlayerRequest.create(e);
                a.open("POST", `/api/mtt/roomPlayers?token=${cc_mtt.vv.DataManager.token}`, !0), o.isNative && a.setRequestHeader("Content-Type", "application/octet-stream"), a.responseType = "arraybuffer", a.send(u.commonProto.MttRoomPlayerRequest.encode(i).finish())
            }, e.requestRelateTournamentList = function(e, s, n = null, a = {}) {
                const {
                    lang: i = cc_mtt.vv.DataManager.i18DataMap[cc_mtt.vv.DataManager.lang] || cc_mtt.vv.DataManager.lang
                } = a;
                let c = new T(r.URL_TYPE.APIMTT);
                c.onload = function() {
                    let e = c.response;
                    if (e) {
                        let o = new Uint8Array(e);
                        const n = u.commonProto.Mtt_RelateTournament_List_Response.decode(o);
                        cc_mtt.vv.ConsoleLog.log("requestRelateTournamentList", n), s(n), t(n, {
                            url: "/api/mtt/getRelateTournamentList"
                        })
                    }
                }, c.onerror = n;
                const l = u.commonProto.Mtt_RelateTournament_List_Request.create({
                    platForm: f.instance.platform,
                    targetTournamentId: e.tournamentId
                });
                let p = `/api/mtt/getRelateTournamentList?token=${cc_mtt.vv.DataManager.token}`;
                i && (p += "&lang=" + i), c.open("POST", p, !0), o.isNative && c.setRequestHeader("Content-Type", "application/octet-stream"), c.responseType = "arraybuffer", c.send(u.commonProto.Mtt_RelateTournament_List_Request.encode(l).finish())
            }
        }(v || (v = e("httpApis", {}))), t._RF.pop()
}