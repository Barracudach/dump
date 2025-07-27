import * as e from "./cc.js";

function main() {
    t({
        DiagLogLevel: void 0,
        SamplingDecision: void 0,
        SpanKind: void 0,
        SpanStatusCode: void 0,
        TraceFlags: void 0,
        ValueType: void 0,
        baggageEntryMetadataFromString: function(t) {
            "string" != typeof t && (S.error("Cannot create baggage metadata from unknown type: " + typeof t), t = "");
            return {
                __TYPE__: w,
                toString: function() {
                    return t
                }
            }
        },
        createContextKey: E,
        createNoopMeter: function() {
            return B
        },
        createTraceState: function(t) {
            return new Lt(t)
        },
        isSpanContextValid: bt,
        isValidSpanId: _t,
        isValidTraceId: dt
    }), e._RF.push({}, "6a86bL2KupNHrLp6XCDE7/M", "otel-api", void 0);
    var n = "object" == typeof globalThis ? globalThis : "object" == typeof self ? self : "object" == typeof window ? window : "object" == typeof global ? global : {},
        r = "1.9.0",
        o = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
    var i = function(t) {
            var e = new Set([t]),
                n = new Set,
                r = t.match(o);
            if (!r) return function() {
                return !1
            };
            var i = +r[1],
                a = +r[2],
                u = +r[3];
            if (null != r[4]) return function(e) {
                return e === t
            };

            function c(t) {
                return n.add(t), !1
            }

            function s(t) {
                return e.add(t), !0
            }
            return function(t) {
                if (e.has(t)) return !0;
                if (n.has(t)) return !1;
                var r = t.match(o);
                if (!r) return c(t);
                var l = +r[1],
                    f = +r[2],
                    p = +r[3];
                return null != r[4] || i !== l ? c(t) : 0 === i ? a === f && u <= p ? s(t) : c(t) : a <= f ? s(t) : c(t)
            }
        }(r),
        a = r.split(".")[0],
        u = Symbol.for("opentelemetry.js.api." + a),
        c = n;

    function s(t, e, n, o) {
        var i;
        void 0 === o && (o = !1);
        var a = c[u] = null !== (i = c[u]) && void 0 !== i ? i : {
            version: r
        };
        if (!o && a[t]) {
            var s = new Error("@opentelemetry/api: Attempted duplicate registration of API: " + t);
            return n.error(s.stack || s.message), !1
        }
        if (a.version !== r) {
            s = new Error("@opentelemetry/api: Registration of version v" + a.version + " for " + t + " does not match previously registered API v" + r);
            return n.error(s.stack || s.message), !1
        }
        return a[t] = e, n.debug("@opentelemetry/api: Registered a global for " + t + " v" + "1.9.0."), !0
    }

    function l(t) {
        var e, n, r = null === (e = c[u]) || void 0 === e ? void 0 : e.version;
        if (r && i(r)) return null === (n = c[u]) || void 0 === n ? void 0 : n[t]
    }

    function f(t, e) {
        e.debug("@opentelemetry/api: Unregistering a global for " + t + " v" + "1.9.0.");
        var n = c[u];
        n && delete n[t]
    }
    var p, y = function() {
        function t(t) {
            this._namespace = t.namespace || "DiagComponentLogger"
        }
        return t.prototype.debug = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return g("debug", this._namespace, t)
        }, t.prototype.error = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return g("error", this._namespace, t)
        }, t.prototype.info = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return g("info", this._namespace, t)
        }, t.prototype.warn = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return g("warn", this._namespace, t)
        }, t.prototype.verbose = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return g("verbose", this._namespace, t)
        }, t
    }();

    function g(t, e, n) {
        var r = l("diag");
        if (r) return n.unshift(e), r[t].apply(r, function(t, e, n) {
            if (n || 2 === arguments.length)
                for (var r, o = 0, i = e.length; o < i; o++) !r && o in e || (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o]);
            return t.concat(r || Array.prototype.slice.call(e))
        }([], function(t, e) {
            var n = "function" == typeof Symbol && t[Symbol.iterator];
            if (!n) return t;
            var r, o, i = n.call(t),
                a = [];
            try {
                for (;
                    (void 0 === e || e-- > 0) && !(r = i.next()).done;) a.push(r.value)
            } catch (t) {
                o = {
                    error: t
                }
            } finally {
                try {
                    r && !r.done && (n = i.return) && n.call(i)
                } finally {
                    if (o) throw o.error
                }
            }
            return a
        }(n), !1))
    }! function(t) {
        t[t.NONE = 0] = "NONE", t[t.ERROR = 30] = "ERROR", t[t.WARN = 50] = "WARN", t[t.INFO = 60] = "INFO", t[t.DEBUG = 70] = "DEBUG", t[t.VERBOSE = 80] = "VERBOSE", t[t.ALL = 9999] = "ALL"
    }(p || (p = t("DiagLogLevel", {})));
    var v = function(t, e) {
            var n = "function" == typeof Symbol && t[Symbol.iterator];
            if (!n) return t;
            var r, o, i = n.call(t),
                a = [];
            try {
                for (;
                    (void 0 === e || e-- > 0) && !(r = i.next()).done;) a.push(r.value)
            } catch (t) {
                o = {
                    error: t
                }
            } finally {
                try {
                    r && !r.done && (n = i.return) && n.call(i)
                } finally {
                    if (o) throw o.error
                }
            }
            return a
        },
        h = function(t, e, n) {
            if (n || 2 === arguments.length)
                for (var r, o = 0, i = e.length; o < i; o++) !r && o in e || (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o]);
            return t.concat(r || Array.prototype.slice.call(e))
        },
        d = function() {
            function t() {
                function t(t) {
                    return function() {
                        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                        var r = l("diag");
                        if (r) return r[t].apply(r, h([], v(e), !1))
                    }
                }
                var e = this;
                e.setLogger = function(t, n) {
                    var r, o, i;
                    if (void 0 === n && (n = {
                            logLevel: p.INFO
                        }), t === e) {
                        var a = new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
                        return e.error(null !== (r = a.stack) && void 0 !== r ? r : a.message), !1
                    }
                    "number" == typeof n && (n = {
                        logLevel: n
                    });
                    var u = l("diag"),
                        c = function(t, e) {
                            function n(n, r) {
                                var o = e[n];
                                return "function" == typeof o && t >= r ? o.bind(e) : function() {}
                            }
                            return t < p.NONE ? t = p.NONE : t > p.ALL && (t = p.ALL), e = e || {}, {
                                error: n("error", p.ERROR),
                                warn: n("warn", p.WARN),
                                info: n("info", p.INFO),
                                debug: n("debug", p.DEBUG),
                                verbose: n("verbose", p.VERBOSE)
                            }
                        }(null !== (o = n.logLevel) && void 0 !== o ? o : p.INFO, t);
                    if (u && !n.suppressOverrideMessage) {
                        var f = null !== (i = (new Error).stack) && void 0 !== i ? i : "<failed to generate stacktrace>";
                        u.warn("Current logger will be overwritten from " + f), c.warn("Current logger will overwrite one already registered from " + f)
                    }
                    return s("diag", c, e, !0)
                }, e.disable = function() {
                    f("diag", e)
                }, e.createComponentLogger = function(t) {
                    return new y(t)
                }, e.verbose = t("verbose"), e.debug = t("debug"), e.info = t("info"), e.warn = t("warn"), e.error = t("error")
            }
            return t.instance = function() {
                return this._instance || (this._instance = new t), this._instance
            }, t
        }(),
        _ = function(t) {
            var e = "function" == typeof Symbol && Symbol.iterator,
                n = e && t[e],
                r = 0;
            if (n) return n.call(t);
            if (t && "number" == typeof t.length) return {
                next: function() {
                    return t && r >= t.length && (t = void 0), {
                        value: t && t[r++],
                        done: !t
                    }
                }
            };
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        },
        b = function() {
            function t(t) {
                this._entries = t ? new Map(t) : new Map
            }
            return t.prototype.getEntry = function(t) {
                var e = this._entries.get(t);
                if (e) return Object.assign({}, e)
            }, t.prototype.getAllEntries = function() {
                return Array.from(this._entries.entries()).map((function(t) {
                    var e = function(t, e) {
                        var n = "function" == typeof Symbol && t[Symbol.iterator];
                        if (!n) return t;
                        var r, o, i = n.call(t),
                            a = [];
                        try {
                            for (;
                                (void 0 === e || e-- > 0) && !(r = i.next()).done;) a.push(r.value)
                        } catch (t) {
                            o = {
                                error: t
                            }
                        } finally {
                            try {
                                r && !r.done && (n = i.return) && n.call(i)
                            } finally {
                                if (o) throw o.error
                            }
                        }
                        return a
                    }(t, 2);
                    return [e[0], e[1]]
                }))
            }, t.prototype.setEntry = function(e, n) {
                var r = new t(this._entries);
                return r._entries.set(e, n), r
            }, t.prototype.removeEntry = function(e) {
                var n = new t(this._entries);
                return n._entries.delete(e), n
            }, t.prototype.removeEntries = function() {
                for (var e, n, r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
                var i = new t(this._entries);
                try {
                    for (var a = _(r), u = a.next(); !u.done; u = a.next()) {
                        var c = u.value;
                        i._entries.delete(c)
                    }
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        u && !u.done && (n = a.return) && n.call(a)
                    } finally {
                        if (e) throw e.error
                    }
                }
                return i
            }, t.prototype.clear = function() {
                return new t
            }, t
        }(),
        w = Symbol("BaggageEntryMetadata"),
        S = d.instance();

    function m(t) {
        return void 0 === t && (t = {}), new b(new Map(Object.entries(t)))
    }

    function E(t) {
        return Symbol.for(t)
    }
    var C, O, R = t("ROOT_CONTEXT", new function t(e) {
            var n = this;
            n._currentContext = e ? new Map(e) : new Map, n.getValue = function(t) {
                return n._currentContext.get(t)
            }, n.setValue = function(e, r) {
                var o = new t(n._currentContext);
                return o._currentContext.set(e, r), o
            }, n.deleteValue = function(e) {
                var r = new t(n._currentContext);
                return r._currentContext.delete(e), r
            }
        }),
        T = [{
            n: "error",
            c: "error"
        }, {
            n: "warn",
            c: "warn"
        }, {
            n: "info",
            c: "info"
        }, {
            n: "debug",
            c: "debug"
        }, {
            n: "verbose",
            c: "trace"
        }],
        x = (t("DiagConsoleLogger", (function() {
            function t(t) {
                return function() {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                    if (console) {
                        var r = console[t];
                        if ("function" != typeof r && (r = console.log), "function" == typeof r) return r.apply(console, e)
                    }
                }
            }
            for (var e = 0; e < T.length; e++) this[T[e].n] = t(T[e].c)
        })), C = function(t, e) {
            return (C = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

            function n() {
                this.constructor = t
            }
            C(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
        N = function() {
            function t() {}
            return t.prototype.createGauge = function(t, e) {
                return U
            }, t.prototype.createHistogram = function(t, e) {
                return F
            }, t.prototype.createCounter = function(t, e) {
                return G
            }, t.prototype.createUpDownCounter = function(t, e) {
                return z
            }, t.prototype.createObservableGauge = function(t, e) {
                return $
            }, t.prototype.createObservableCounter = function(t, e) {
                return K
            }, t.prototype.createObservableUpDownCounter = function(t, e) {
                return W
            }, t.prototype.addBatchObservableCallback = function(t, e) {}, t.prototype.removeBatchObservableCallback = function(t) {}, t
        }(),
        A = function() {},
        D = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return x(e, t), e.prototype.add = function(t, e) {}, e
        }(A),
        I = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return x(e, t), e.prototype.add = function(t, e) {}, e
        }(A),
        L = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return x(e, t), e.prototype.record = function(t, e) {}, e
        }(A),
        M = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return x(e, t), e.prototype.record = function(t, e) {}, e
        }(A),
        P = function() {
            function t() {}
            return t.prototype.addCallback = function(t) {}, t.prototype.removeCallback = function(t) {}, t
        }(),
        V = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return x(e, t), e
        }(P),
        k = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return x(e, t), e
        }(P),
        j = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return x(e, t), e
        }(P),
        B = new N,
        G = new D,
        U = new L,
        F = new M,
        z = new I,
        K = new V,
        $ = new k,
        W = new j;
    ! function(t) {
        t[t.INT = 0] = "INT", t[t.DOUBLE = 1] = "DOUBLE"
    }(O || (O = t("ValueType", {})));
    var X, H = t("defaultTextMapGetter", {
            get: function(t, e) {
                if (null != t) return t[e]
            },
            keys: function(t) {
                return null == t ? [] : Object.keys(t)
            }
        }),
        Y = t("defaultTextMapSetter", {
            set: function(t, e, n) {
                null != t && (t[e] = n)
            }
        }),
        q = function(t, e) {
            var n = "function" == typeof Symbol && t[Symbol.iterator];
            if (!n) return t;
            var r, o, i = n.call(t),
                a = [];
            try {
                for (;
                    (void 0 === e || e-- > 0) && !(r = i.next()).done;) a.push(r.value)
            } catch (t) {
                o = {
                    error: t
                }
            } finally {
                try {
                    r && !r.done && (n = i.return) && n.call(i)
                } finally {
                    if (o) throw o.error
                }
            }
            return a
        },
        J = function(t, e, n) {
            if (n || 2 === arguments.length)
                for (var r, o = 0, i = e.length; o < i; o++) !r && o in e || (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o]);
            return t.concat(r || Array.prototype.slice.call(e))
        },
        Q = function() {
            function t() {}
            return t.prototype.active = function() {
                return R
            }, t.prototype.with = function(t, e, n) {
                for (var r = [], o = 3; o < arguments.length; o++) r[o - 3] = arguments[o];
                return e.call.apply(e, J([n], q(r), !1))
            }, t.prototype.bind = function(t, e) {
                return e
            }, t.prototype.enable = function() {
                return this
            }, t.prototype.disable = function() {
                return this
            }, t
        }(),
        Z = function(t, e) {
            var n = "function" == typeof Symbol && t[Symbol.iterator];
            if (!n) return t;
            var r, o, i = n.call(t),
                a = [];
            try {
                for (;
                    (void 0 === e || e-- > 0) && !(r = i.next()).done;) a.push(r.value)
            } catch (t) {
                o = {
                    error: t
                }
            } finally {
                try {
                    r && !r.done && (n = i.return) && n.call(i)
                } finally {
                    if (o) throw o.error
                }
            }
            return a
        },
        tt = function(t, e, n) {
            if (n || 2 === arguments.length)
                for (var r, o = 0, i = e.length; o < i; o++) !r && o in e || (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o]);
            return t.concat(r || Array.prototype.slice.call(e))
        },
        et = "context",
        nt = new Q,
        rt = function() {
            function t() {}
            return t.getInstance = function() {
                return this._instance || (this._instance = new t), this._instance
            }, t.prototype.setGlobalContextManager = function(t) {
                return s(et, t, d.instance())
            }, t.prototype.active = function() {
                return this._getContextManager().active()
            }, t.prototype.with = function(t, e, n) {
                for (var r, o = [], i = 3; i < arguments.length; i++) o[i - 3] = arguments[i];
                return (r = this._getContextManager()).with.apply(r, tt([t, e, n], Z(o), !1))
            }, t.prototype.bind = function(t, e) {
                return this._getContextManager().bind(t, e)
            }, t.prototype._getContextManager = function() {
                return l(et) || nt
            }, t.prototype.disable = function() {
                this._getContextManager().disable(), f(et, d.instance())
            }, t
        }();
    ! function(t) {
        t[t.NONE = 0] = "NONE", t[t.SAMPLED = 1] = "SAMPLED"
    }(X || (X = t("TraceFlags", {})));
    var ot = t("INVALID_SPANID", "0000000000000000"),
        it = t("INVALID_TRACEID", "00000000000000000000000000000000"),
        at = t("INVALID_SPAN_CONTEXT", {
            traceId: it,
            spanId: ot,
            traceFlags: X.NONE
        }),
        ut = function() {
            function t(t) {
                void 0 === t && (t = at), this._spanContext = t
            }
            return t.prototype.spanContext = function() {
                return this._spanContext
            }, t.prototype.setAttribute = function(t, e) {
                return this
            }, t.prototype.setAttributes = function(t) {
                return this
            }, t.prototype.addEvent = function(t, e) {
                return this
            }, t.prototype.addLink = function(t) {
                return this
            }, t.prototype.addLinks = function(t) {
                return this
            }, t.prototype.setStatus = function(t) {
                return this
            }, t.prototype.updateName = function(t) {
                return this
            }, t.prototype.end = function(t) {}, t.prototype.isRecording = function() {
                return !1
            }, t.prototype.recordException = function(t, e) {}, t
        }(),
        ct = E("OpenTelemetry Context Key SPAN");

    function st(t) {
        return t.getValue(ct) || void 0
    }

    function lt() {
        return st(rt.getInstance().active())
    }

    function ft(t, e) {
        return t.setValue(ct, e)
    }

    function pt(t) {
        return t.deleteValue(ct)
    }

    function yt(t, e) {
        return ft(t, new ut(e))
    }

    function gt(t) {
        var e;
        return null === (e = st(t)) || void 0 === e ? void 0 : e.spanContext()
    }
    var vt = /^([0-9a-f]{32})$/i,
        ht = /^[0-9a-f]{16}$/i;

    function dt(t) {
        return vt.test(t) && t !== it
    }

    function _t(t) {
        return ht.test(t) && t !== ot
    }

    function bt(t) {
        return dt(t.traceId) && _t(t.spanId)
    }

    function wt(t) {
        return new ut(t)
    }
    var St = rt.getInstance(),
        mt = function() {
            function t() {}
            return t.prototype.startSpan = function(t, e, n) {
                if (void 0 === n && (n = St.active()), Boolean(null == e ? void 0 : e.root)) return new ut;
                var r, o = n && gt(n);
                return "object" == typeof(r = o) && "string" == typeof r.spanId && "string" == typeof r.traceId && "number" == typeof r.traceFlags && bt(o) ? new ut(o) : new ut
            }, t.prototype.startActiveSpan = function(t, e, n, r) {
                var o, i, a;
                if (!(arguments.length < 2)) {
                    2 === arguments.length ? a = e : 3 === arguments.length ? (o = e, a = n) : (o = e, i = n, a = r);
                    var u = null != i ? i : St.active(),
                        c = this.startSpan(t, o, u),
                        s = ft(u, c);
                    return St.with(s, a, void 0, c)
                }
            }, t
        }();
    var Et, Ct, Ot, Rt = new mt,
        Tt = t("ProxyTracer", function() {
            function t(t, e, n, r) {
                this._provider = t, this.name = e, this.version = n, this.options = r
            }
            return t.prototype.startSpan = function(t, e, n) {
                return this._getTracer().startSpan(t, e, n)
            }, t.prototype.startActiveSpan = function(t, e, n, r) {
                var o = this._getTracer();
                return Reflect.apply(o.startActiveSpan, o, arguments)
            }, t.prototype._getTracer = function() {
                if (this._delegate) return this._delegate;
                var t = this._provider.getDelegateTracer(this.name, this.version, this.options);
                return t ? (this._delegate = t, this._delegate) : Rt
            }, t
        }()),
        xt = new(function() {
            function t() {}
            return t.prototype.getTracer = function(t, e, n) {
                return new mt
            }, t
        }()),
        Nt = t("ProxyTracerProvider", function() {
            function t() {}
            return t.prototype.getTracer = function(t, e, n) {
                var r;
                return null !== (r = this.getDelegateTracer(t, e, n)) && void 0 !== r ? r : new Tt(this, t, e, n)
            }, t.prototype.getDelegate = function() {
                var t;
                return null !== (t = this._delegate) && void 0 !== t ? t : xt
            }, t.prototype.setDelegate = function(t) {
                this._delegate = t
            }, t.prototype.getDelegateTracer = function(t, e, n) {
                var r;
                return null === (r = this._delegate) || void 0 === r ? void 0 : r.getTracer(t, e, n)
            }, t
        }());
    ! function(t) {
        t[t.NOT_RECORD = 0] = "NOT_RECORD", t[t.RECORD = 1] = "RECORD", t[t.RECORD_AND_SAMPLED = 2] = "RECORD_AND_SAMPLED"
    }(Et || (Et = t("SamplingDecision", {}))),
    function(t) {
        t[t.INTERNAL = 0] = "INTERNAL", t[t.SERVER = 1] = "SERVER", t[t.CLIENT = 2] = "CLIENT", t[t.PRODUCER = 3] = "PRODUCER", t[t.CONSUMER = 4] = "CONSUMER"
    }(Ct || (Ct = t("SpanKind", {}))),
    function(t) {
        t[t.UNSET = 0] = "UNSET", t[t.OK = 1] = "OK", t[t.ERROR = 2] = "ERROR"
    }(Ot || (Ot = t("SpanStatusCode", {})));
    var At = new RegExp("^(?:[a-z][_0-9a-z-*/]{0,255}|[a-z0-9][_0-9a-z-*/]{0,240}@[a-z][_0-9a-z-*/]{0,13})$"),
        Dt = /^[ -~]{0,255}[!-~]$/,
        It = /,|=/;
    var Lt = function() {
        function t(t) {
            this._internalState = new Map, t && this._parse(t)
        }
        return t.prototype.set = function(t, e) {
            var n = this._clone();
            return n._internalState.has(t) && n._internalState.delete(t), n._internalState.set(t, e), n
        }, t.prototype.unset = function(t) {
            var e = this._clone();
            return e._internalState.delete(t), e
        }, t.prototype.get = function(t) {
            return this._internalState.get(t)
        }, t.prototype.serialize = function() {
            var t = this;
            return this._keys().reduce((function(e, n) {
                return e.push(n + "=" + t.get(n)), e
            }), []).join(",")
        }, t.prototype._parse = function(t) {
            t.length > 512 || (this._internalState = t.split(",").reverse().reduce((function(t, e) {
                var n = e.trim(),
                    r = n.indexOf("=");
                if (-1 !== r) {
                    var o = n.slice(0, r),
                        i = n.slice(r + 1, e.length);
                    (function(t) {
                        return At.test(t)
                    })(o) && function(t) {
                        return Dt.test(t) && !It.test(t)
                    }(i) && t.set(o, i)
                }
                return t
            }), new Map), this._internalState.size > 32 && (this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, 32))))
        }, t.prototype._keys = function() {
            return Array.from(this._internalState.keys()).reverse()
        }, t.prototype._clone = function() {
            var e = new t;
            return e._internalState = new Map(this._internalState), e
        }, t
    }();
    t("context", rt.getInstance()), t("diag", d.instance());
    var Mt = new(function() {
            function t() {}
            return t.prototype.getMeter = function(t, e, n) {
                return B
            }, t
        }()),
        Pt = "metrics",
        Vt = function() {
            function t() {}
            return t.getInstance = function() {
                return this._instance || (this._instance = new t), this._instance
            }, t.prototype.setGlobalMeterProvider = function(t) {
                return s(Pt, t, d.instance())
            }, t.prototype.getMeterProvider = function() {
                return l(Pt) || Mt
            }, t.prototype.getMeter = function(t, e, n) {
                return this.getMeterProvider().getMeter(t, e, n)
            }, t.prototype.disable = function() {
                f(Pt, d.instance())
            }, t
        }(),
        kt = (t("metrics", Vt.getInstance()), function() {
            function t() {}
            return t.prototype.inject = function(t, e) {}, t.prototype.extract = function(t, e) {
                return t
            }, t.prototype.fields = function() {
                return []
            }, t
        }()),
        jt = E("OpenTelemetry Baggage Key");

    function Bt(t) {
        return t.getValue(jt) || void 0
    }

    function Gt() {
        return Bt(rt.getInstance().active())
    }

    function Ut(t, e) {
        return t.setValue(jt, e)
    }

    function Ft(t) {
        return t.deleteValue(jt)
    }
    var zt = "propagation",
        Kt = new kt,
        $t = function() {
            function t() {
                this.createBaggage = m, this.getBaggage = Bt, this.getActiveBaggage = Gt, this.setBaggage = Ut, this.deleteBaggage = Ft
            }
            return t.getInstance = function() {
                return this._instance || (this._instance = new t), this._instance
            }, t.prototype.setGlobalPropagator = function(t) {
                return s(zt, t, d.instance())
            }, t.prototype.inject = function(t, e, n) {
                return void 0 === n && (n = Y), this._getGlobalPropagator().inject(t, e, n)
            }, t.prototype.extract = function(t, e, n) {
                return void 0 === n && (n = H), this._getGlobalPropagator().extract(t, e, n)
            }, t.prototype.fields = function() {
                return this._getGlobalPropagator().fields()
            }, t.prototype.disable = function() {
                f(zt, d.instance())
            }, t.prototype._getGlobalPropagator = function() {
                return l(zt) || Kt
            }, t
        }(),
        Wt = (t("propagation", $t.getInstance()), "trace"),
        Xt = function() {
            function t() {
                this._proxyTracerProvider = new Nt, this.wrapSpanContext = wt, this.isSpanContextValid = bt, this.deleteSpan = pt, this.getSpan = st, this.getActiveSpan = lt, this.getSpanContext = gt, this.setSpan = ft, this.setSpanContext = yt
            }
            return t.getInstance = function() {
                return this._instance || (this._instance = new t), this._instance
            }, t.prototype.setGlobalTracerProvider = function(t) {
                var e = s(Wt, this._proxyTracerProvider, d.instance());
                return e && this._proxyTracerProvider.setDelegate(t), e
            }, t.prototype.getTracerProvider = function() {
                return l(Wt) || this._proxyTracerProvider
            }, t.prototype.getTracer = function(t, e) {
                return this.getTracerProvider().getTracer(t, e)
            }, t.prototype.disable = function() {
                f(Wt, d.instance()), this._proxyTracerProvider = new Nt
            }, t
        }();
    t("trace", Xt.getInstance());
    e._RF.pop()
}