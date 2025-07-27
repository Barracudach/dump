import * as e from "./cc.js";

function main() {
    t({
        ForceFlushState: void 0,
        SamplingDecision: void 0
    }), e._RF.push({}, "63551OHaYhJiKe3Kl1tU5ps", "otel-sdk-trace-base", void 0);
    var r = "object" == typeof globalThis ? globalThis : "object" == typeof self ? self : "object" == typeof window ? window : "object" == typeof global ? global : {},
        n = "1.9.0",
        o = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
    var i = function(t) {
            var e = new Set([t]),
                r = new Set,
                n = t.match(o);
            if (!n) return function() {
                return !1
            };
            var i = +n[1],
                a = +n[2],
                s = +n[3];
            if (null != n[4]) return function(e) {
                return e === t
            };

            function u(t) {
                return r.add(t), !1
            }

            function c(t) {
                return e.add(t), !0
            }
            return function(t) {
                if (e.has(t)) return !0;
                if (r.has(t)) return !1;
                var n = t.match(o);
                if (!n) return u(t);
                var l = +n[1],
                    p = +n[2],
                    f = +n[3];
                return null != n[4] || i !== l ? u(t) : 0 === i ? a === p && s <= f ? c(t) : u(t) : a <= p ? c(t) : u(t)
            }
        }(n),
        a = n.split(".")[0],
        s = Symbol.for("opentelemetry.js.api." + a),
        u = r;

    function c(t, e, r, o) {
        var i;
        void 0 === o && (o = !1);
        var a = u[s] = null !== (i = u[s]) && void 0 !== i ? i : {
            version: n
        };
        if (!o && a[t]) {
            var c = new Error("@opentelemetry/api: Attempted duplicate registration of API: " + t);
            return r.error(c.stack || c.message), !1
        }
        if (a.version !== n) {
            c = new Error("@opentelemetry/api: Registration of version v" + a.version + " for " + t + " does not match previously registered API v" + n);
            return r.error(c.stack || c.message), !1
        }
        return a[t] = e, r.debug("@opentelemetry/api: Registered a global for " + t + " v" + "1.9.0."), !0
    }

    function l(t) {
        var e, r, n = null === (e = u[s]) || void 0 === e ? void 0 : e.version;
        if (n && i(n)) return null === (r = u[s]) || void 0 === r ? void 0 : r[t]
    }

    function p(t, e) {
        e.debug("@opentelemetry/api: Unregistering a global for " + t + " v" + "1.9.0.");
        var r = u[s];
        r && delete r[t]
    }
    var f, _ = function() {
        function t(t) {
            this._namespace = t.namespace || "DiagComponentLogger"
        }
        return t.prototype.debug = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return h("debug", this._namespace, t)
        }, t.prototype.error = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return h("error", this._namespace, t)
        }, t.prototype.info = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return h("info", this._namespace, t)
        }, t.prototype.warn = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return h("warn", this._namespace, t)
        }, t.prototype.verbose = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return h("verbose", this._namespace, t)
        }, t
    }();

    function h(t, e, r) {
        var n = l("diag");
        if (n) return r.unshift(e), n[t].apply(n, function(t, e, r) {
            if (r || 2 === arguments.length)
                for (var n, o = 0, i = e.length; o < i; o++) !n && o in e || (n || (n = Array.prototype.slice.call(e, 0, o)), n[o] = e[o]);
            return t.concat(n || Array.prototype.slice.call(e))
        }([], function(t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var n, o, i = r.call(t),
                a = [];
            try {
                for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value)
            } catch (t) {
                o = {
                    error: t
                }
            } finally {
                try {
                    n && !n.done && (r = i.return) && r.call(i)
                } finally {
                    if (o) throw o.error
                }
            }
            return a
        }(r), !1))
    }! function(t) {
        t[t.NONE = 0] = "NONE", t[t.ERROR = 30] = "ERROR", t[t.WARN = 50] = "WARN", t[t.INFO = 60] = "INFO", t[t.DEBUG = 70] = "DEBUG", t[t.VERBOSE = 80] = "VERBOSE", t[t.ALL = 9999] = "ALL"
    }(f || (f = {}));
    var d = function(t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var n, o, i = r.call(t),
                a = [];
            try {
                for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value)
            } catch (t) {
                o = {
                    error: t
                }
            } finally {
                try {
                    n && !n.done && (r = i.return) && r.call(i)
                } finally {
                    if (o) throw o.error
                }
            }
            return a
        },
        E = function(t, e, r) {
            if (r || 2 === arguments.length)
                for (var n, o = 0, i = e.length; o < i; o++) !n && o in e || (n || (n = Array.prototype.slice.call(e, 0, o)), n[o] = e[o]);
            return t.concat(n || Array.prototype.slice.call(e))
        },
        T = function() {
            function t() {
                function t(t) {
                    return function() {
                        for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                        var n = l("diag");
                        if (n) return n[t].apply(n, E([], d(e), !1))
                    }
                }
                var e = this;
                e.setLogger = function(t, r) {
                    var n, o, i;
                    if (void 0 === r && (r = {
                            logLevel: f.INFO
                        }), t === e) {
                        var a = new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
                        return e.error(null !== (n = a.stack) && void 0 !== n ? n : a.message), !1
                    }
                    "number" == typeof r && (r = {
                        logLevel: r
                    });
                    var s = l("diag"),
                        u = function(t, e) {
                            function r(r, n) {
                                var o = e[r];
                                return "function" == typeof o && t >= n ? o.bind(e) : function() {}
                            }
                            return t < f.NONE ? t = f.NONE : t > f.ALL && (t = f.ALL), e = e || {}, {
                                error: r("error", f.ERROR),
                                warn: r("warn", f.WARN),
                                info: r("info", f.INFO),
                                debug: r("debug", f.DEBUG),
                                verbose: r("verbose", f.VERBOSE)
                            }
                        }(null !== (o = r.logLevel) && void 0 !== o ? o : f.INFO, t);
                    if (s && !r.suppressOverrideMessage) {
                        var p = null !== (i = (new Error).stack) && void 0 !== i ? i : "<failed to generate stacktrace>";
                        s.warn("Current logger will be overwritten from " + p), u.warn("Current logger will overwrite one already registered from " + p)
                    }
                    return c("diag", u, e, !0)
                }, e.disable = function() {
                    p("diag", e)
                }, e.createComponentLogger = function(t) {
                    return new _(t)
                }, e.verbose = t("verbose"), e.debug = t("debug"), e.info = t("info"), e.warn = t("warn"), e.error = t("error")
            }
            return t.instance = function() {
                return this._instance || (this._instance = new t), this._instance
            }, t
        }(),
        y = function(t) {
            var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0;
            if (r) return r.call(t);
            if (t && "number" == typeof t.length) return {
                next: function() {
                    return t && n >= t.length && (t = void 0), {
                        value: t && t[n++],
                        done: !t
                    }
                }
            };
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        },
        v = function() {
            function t(t) {
                this._entries = t ? new Map(t) : new Map
            }
            return t.prototype.getEntry = function(t) {
                var e = this._entries.get(t);
                if (e) return Object.assign({}, e)
            }, t.prototype.getAllEntries = function() {
                return Array.from(this._entries.entries()).map((function(t) {
                    var e = function(t, e) {
                        var r = "function" == typeof Symbol && t[Symbol.iterator];
                        if (!r) return t;
                        var n, o, i = r.call(t),
                            a = [];
                        try {
                            for (;
                                (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value)
                        } catch (t) {
                            o = {
                                error: t
                            }
                        } finally {
                            try {
                                n && !n.done && (r = i.return) && r.call(i)
                            } finally {
                                if (o) throw o.error
                            }
                        }
                        return a
                    }(t, 2);
                    return [e[0], e[1]]
                }))
            }, t.prototype.setEntry = function(e, r) {
                var n = new t(this._entries);
                return n._entries.set(e, r), n
            }, t.prototype.removeEntry = function(e) {
                var r = new t(this._entries);
                return r._entries.delete(e), r
            }, t.prototype.removeEntries = function() {
                for (var e, r, n = [], o = 0; o < arguments.length; o++) n[o] = arguments[o];
                var i = new t(this._entries);
                try {
                    for (var a = y(n), s = a.next(); !s.done; s = a.next()) {
                        var u = s.value;
                        i._entries.delete(u)
                    }
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        s && !s.done && (r = a.return) && r.call(a)
                    } finally {
                        if (e) throw e.error
                    }
                }
                return i
            }, t.prototype.clear = function() {
                return new t
            }, t
        }(),
        g = Symbol("BaggageEntryMetadata"),
        O = T.instance();

    function m(t) {
        return void 0 === t && (t = {}), new v(new Map(Object.entries(t)))
    }

    function S(t) {
        return Symbol.for(t)
    }
    var L, R = new function t(e) {
            var r = this;
            r._currentContext = e ? new Map(e) : new Map, r.getValue = function(t) {
                return r._currentContext.get(t)
            }, r.setValue = function(e, n) {
                var o = new t(r._currentContext);
                return o._currentContext.set(e, n), o
            }, r.deleteValue = function(e) {
                var n = new t(r._currentContext);
                return n._currentContext.delete(e), n
            }
        },
        b = {
            get: function(t, e) {
                if (null != t) return t[e]
            },
            keys: function(t) {
                return null == t ? [] : Object.keys(t)
            }
        },
        P = {
            set: function(t, e, r) {
                null != t && (t[e] = r)
            }
        },
        A = function(t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var n, o, i = r.call(t),
                a = [];
            try {
                for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value)
            } catch (t) {
                o = {
                    error: t
                }
            } finally {
                try {
                    n && !n.done && (r = i.return) && r.call(i)
                } finally {
                    if (o) throw o.error
                }
            }
            return a
        },
        w = function(t, e, r) {
            if (r || 2 === arguments.length)
                for (var n, o = 0, i = e.length; o < i; o++) !n && o in e || (n || (n = Array.prototype.slice.call(e, 0, o)), n[o] = e[o]);
            return t.concat(n || Array.prototype.slice.call(e))
        },
        C = function() {
            function t() {}
            return t.prototype.active = function() {
                return R
            }, t.prototype.with = function(t, e, r) {
                for (var n = [], o = 3; o < arguments.length; o++) n[o - 3] = arguments[o];
                return e.call.apply(e, w([r], A(n), !1))
            }, t.prototype.bind = function(t, e) {
                return e
            }, t.prototype.enable = function() {
                return this
            }, t.prototype.disable = function() {
                return this
            }, t
        }(),
        I = function(t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var n, o, i = r.call(t),
                a = [];
            try {
                for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value)
            } catch (t) {
                o = {
                    error: t
                }
            } finally {
                try {
                    n && !n.done && (r = i.return) && r.call(i)
                } finally {
                    if (o) throw o.error
                }
            }
            return a
        },
        x = function(t, e, r) {
            if (r || 2 === arguments.length)
                for (var n, o = 0, i = e.length; o < i; o++) !n && o in e || (n || (n = Array.prototype.slice.call(e, 0, o)), n[o] = e[o]);
            return t.concat(n || Array.prototype.slice.call(e))
        },
        N = "context",
        M = new C,
        U = function() {
            function t() {}
            return t.getInstance = function() {
                return this._instance || (this._instance = new t), this._instance
            }, t.prototype.setGlobalContextManager = function(t) {
                return c(N, t, T.instance())
            }, t.prototype.active = function() {
                return this._getContextManager().active()
            }, t.prototype.with = function(t, e, r) {
                for (var n, o = [], i = 3; i < arguments.length; i++) o[i - 3] = arguments[i];
                return (n = this._getContextManager()).with.apply(n, x([t, e, r], I(o), !1))
            }, t.prototype.bind = function(t, e) {
                return this._getContextManager().bind(t, e)
            }, t.prototype._getContextManager = function() {
                return l(N) || M
            }, t.prototype.disable = function() {
                this._getContextManager().disable(), p(N, T.instance())
            }, t
        }();
    ! function(t) {
        t[t.NONE = 0] = "NONE", t[t.SAMPLED = 1] = "SAMPLED"
    }(L || (L = {}));
    var B = "0000000000000000",
        D = "00000000000000000000000000000000",
        j = {
            traceId: D,
            spanId: B,
            traceFlags: L.NONE
        },
        k = function() {
            function t(t) {
                void 0 === t && (t = j), this._spanContext = t
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
        G = S("OpenTelemetry Context Key SPAN");

    function X(t) {
        return t.getValue(G) || void 0
    }

    function F() {
        return X(U.getInstance().active())
    }

    function V(t, e) {
        return t.setValue(G, e)
    }

    function z(t) {
        return t.deleteValue(G)
    }

    function H(t, e) {
        return V(t, new k(e))
    }

    function K(t) {
        var e;
        return null === (e = X(t)) || void 0 === e ? void 0 : e.spanContext()
    }
    var Q = /^([0-9a-f]{32})$/i,
        Y = /^[0-9a-f]{16}$/i;

    function Z(t) {
        return Q.test(t) && t !== D
    }

    function J(t) {
        return Z(t.traceId) && (e = t.spanId, Y.test(e) && e !== B);
        var e
    }

    function W(t) {
        return new k(t)
    }
    var $ = U.getInstance(),
        q = function() {
            function t() {}
            return t.prototype.startSpan = function(t, e, r) {
                if (void 0 === r && (r = $.active()), Boolean(null == e ? void 0 : e.root)) return new k;
                var n, o = r && K(r);
                return "object" == typeof(n = o) && "string" == typeof n.spanId && "string" == typeof n.traceId && "number" == typeof n.traceFlags && J(o) ? new k(o) : new k
            }, t.prototype.startActiveSpan = function(t, e, r, n) {
                var o, i, a;
                if (!(arguments.length < 2)) {
                    2 === arguments.length ? a = e : 3 === arguments.length ? (o = e, a = r) : (o = e, i = r, a = n);
                    var s = null != i ? i : $.active(),
                        u = this.startSpan(t, o, s),
                        c = V(s, u);
                    return $.with(c, a, void 0, u)
                }
            }, t
        }();
    var tt, et, rt, nt = new q,
        ot = function() {
            function t(t, e, r, n) {
                this._provider = t, this.name = e, this.version = r, this.options = n
            }
            return t.prototype.startSpan = function(t, e, r) {
                return this._getTracer().startSpan(t, e, r)
            }, t.prototype.startActiveSpan = function(t, e, r, n) {
                var o = this._getTracer();
                return Reflect.apply(o.startActiveSpan, o, arguments)
            }, t.prototype._getTracer = function() {
                if (this._delegate) return this._delegate;
                var t = this._provider.getDelegateTracer(this.name, this.version, this.options);
                return t ? (this._delegate = t, this._delegate) : nt
            }, t
        }(),
        it = new(function() {
            function t() {}
            return t.prototype.getTracer = function(t, e, r) {
                return new q
            }, t
        }()),
        at = function() {
            function t() {}
            return t.prototype.getTracer = function(t, e, r) {
                var n;
                return null !== (n = this.getDelegateTracer(t, e, r)) && void 0 !== n ? n : new ot(this, t, e, r)
            }, t.prototype.getDelegate = function() {
                var t;
                return null !== (t = this._delegate) && void 0 !== t ? t : it
            }, t.prototype.setDelegate = function(t) {
                this._delegate = t
            }, t.prototype.getDelegateTracer = function(t, e, r) {
                var n;
                return null === (n = this._delegate) || void 0 === n ? void 0 : n.getTracer(t, e, r)
            }, t
        }();
    ! function(t) {
        t[t.NOT_RECORD = 0] = "NOT_RECORD", t[t.RECORD = 1] = "RECORD", t[t.RECORD_AND_SAMPLED = 2] = "RECORD_AND_SAMPLED"
    }(tt || (tt = {})),
    function(t) {
        t[t.INTERNAL = 0] = "INTERNAL", t[t.SERVER = 1] = "SERVER", t[t.CLIENT = 2] = "CLIENT", t[t.PRODUCER = 3] = "PRODUCER", t[t.CONSUMER = 4] = "CONSUMER"
    }(et || (et = {})),
    function(t) {
        t[t.UNSET = 0] = "UNSET", t[t.OK = 1] = "OK", t[t.ERROR = 2] = "ERROR"
    }(rt || (rt = {}));
    var st = U.getInstance(),
        ut = T.instance(),
        ct = function() {
            function t() {}
            return t.prototype.inject = function(t, e) {}, t.prototype.extract = function(t, e) {
                return t
            }, t.prototype.fields = function() {
                return []
            }, t
        }(),
        lt = S("OpenTelemetry Baggage Key");

    function pt(t) {
        return t.getValue(lt) || void 0
    }

    function ft() {
        return pt(U.getInstance().active())
    }

    function _t(t, e) {
        return t.setValue(lt, e)
    }

    function ht(t) {
        return t.deleteValue(lt)
    }
    var dt = "propagation",
        Et = new ct,
        Tt = function() {
            function t() {
                this.createBaggage = m, this.getBaggage = pt, this.getActiveBaggage = ft, this.setBaggage = _t, this.deleteBaggage = ht
            }
            return t.getInstance = function() {
                return this._instance || (this._instance = new t), this._instance
            }, t.prototype.setGlobalPropagator = function(t) {
                return c(dt, t, T.instance())
            }, t.prototype.inject = function(t, e, r) {
                return void 0 === r && (r = P), this._getGlobalPropagator().inject(t, e, r)
            }, t.prototype.extract = function(t, e, r) {
                return void 0 === r && (r = b), this._getGlobalPropagator().extract(t, e, r)
            }, t.prototype.fields = function() {
                return this._getGlobalPropagator().fields()
            }, t.prototype.disable = function() {
                p(dt, T.instance())
            }, t.prototype._getGlobalPropagator = function() {
                return l(dt) || Et
            }, t
        }().getInstance(),
        yt = "trace",
        vt = function() {
            function t() {
                this._proxyTracerProvider = new at, this.wrapSpanContext = W, this.isSpanContextValid = J, this.deleteSpan = z, this.getSpan = X, this.getActiveSpan = F, this.getSpanContext = K, this.setSpan = V, this.setSpanContext = H
            }
            return t.getInstance = function() {
                return this._instance || (this._instance = new t), this._instance
            }, t.prototype.setGlobalTracerProvider = function(t) {
                var e = c(yt, this._proxyTracerProvider, T.instance());
                return e && this._proxyTracerProvider.setDelegate(t), e
            }, t.prototype.getTracerProvider = function() {
                return l(yt) || this._proxyTracerProvider
            }, t.prototype.getTracer = function(t, e) {
                return this.getTracerProvider().getTracer(t, e)
            }, t.prototype.disable = function() {
                p(yt, T.instance()), this._proxyTracerProvider = new at
            }, t
        }().getInstance(),
        gt = S("OpenTelemetry SDK Context Key SUPPRESS_TRACING");

    function Ot(t) {
        return t.setValue(gt, !0)
    }

    function mt(t) {
        return !0 === t.getValue(gt)
    }
    var St = "baggage";

    function Lt(t) {
        return t.getAllEntries().map((function(t) {
            var e = function(t, e) {
                    var r = "function" == typeof Symbol && t[Symbol.iterator];
                    if (!r) return t;
                    var n, o, i = r.call(t),
                        a = [];
                    try {
                        for (;
                            (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value)
                    } catch (t) {
                        o = {
                            error: t
                        }
                    } finally {
                        try {
                            n && !n.done && (r = i.return) && r.call(i)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                    return a
                }(t, 2),
                r = e[0],
                n = e[1],
                o = encodeURIComponent(r) + "=" + encodeURIComponent(n.value);
            return void 0 !== n.metadata && (o += ";" + n.metadata.toString()), o
        }))
    }

    function Rt(t) {
        var e = t.split(";");
        if (!(e.length <= 0)) {
            var r = e.shift();
            if (r) {
                var n = r.indexOf("=");
                if (!(n <= 0)) {
                    var o, i, a = decodeURIComponent(r.substring(0, n).trim()),
                        s = decodeURIComponent(r.substring(n + 1).trim());
                    return e.length > 0 && ("string" != typeof(i = e.join(";")) && (O.error("Cannot create baggage metadata from unknown type: " + typeof i), i = ""), o = {
                        __TYPE__: g,
                        toString: function() {
                            return i
                        }
                    }), {
                        key: a,
                        value: s,
                        metadata: o
                    }
                }
            }
        }
    }
    var bt = function() {
            function t() {}
            return t.prototype.inject = function(t, e, r) {
                var n = Tt.getBaggage(t);
                if (n && !mt(t)) {
                    var o = function(t) {
                        return t.reduce((function(t, e) {
                            var r = t + ("" !== t ? "," : "") + e;
                            return r.length > 8192 ? t : r
                        }), "")
                    }(Lt(n).filter((function(t) {
                        return t.length <= 4096
                    })).slice(0, 180));
                    o.length > 0 && r.set(e, St, o)
                }
            }, t.prototype.extract = function(t, e, r) {
                var n = r.get(e, St),
                    o = Array.isArray(n) ? n.join(",") : n;
                if (!o) return t;
                var i = {};
                return 0 === o.length ? t : (o.split(",").forEach((function(t) {
                    var e = Rt(t);
                    if (e) {
                        var r = {
                            value: e.value
                        };
                        e.metadata && (r.metadata = e.metadata), i[e.key] = r
                    }
                })), 0 === Object.entries(i).length ? t : Tt.setBaggage(t, Tt.createBaggage(i)))
            }, t.prototype.fields = function() {
                return [St]
            }, t
        }(),
        Pt = function(t) {
            var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0;
            if (r) return r.call(t);
            if (t && "number" == typeof t.length) return {
                next: function() {
                    return t && n >= t.length && (t = void 0), {
                        value: t && t[n++],
                        done: !t
                    }
                }
            };
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        },
        At = function(t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var n, o, i = r.call(t),
                a = [];
            try {
                for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value)
            } catch (t) {
                o = {
                    error: t
                }
            } finally {
                try {
                    n && !n.done && (r = i.return) && r.call(i)
                } finally {
                    if (o) throw o.error
                }
            }
            return a
        };

    function wt(t) {
        var e, r, n = {};
        if ("object" != typeof t || null == t) return n;
        try {
            for (var o = Pt(Object.entries(t)), i = o.next(); !i.done; i = o.next()) {
                var a = At(i.value, 2),
                    s = a[0],
                    u = a[1];
                Ct(s) ? It(u) ? Array.isArray(u) ? n[s] = u.slice() : n[s] = u : ut.warn("Invalid attribute value set for key: " + s) : ut.warn("Invalid attribute key: " + s)
            }
        } catch (t) {
            e = {
                error: t
            }
        } finally {
            try {
                i && !i.done && (r = o.return) && r.call(o)
            } finally {
                if (e) throw e.error
            }
        }
        return n
    }

    function Ct(t) {
        return "string" == typeof t && t.length > 0
    }

    function It(t) {
        return null == t || (Array.isArray(t) ? function(t) {
            var e, r, n;
            try {
                for (var o = Pt(t), i = o.next(); !i.done; i = o.next()) {
                    var a = i.value;
                    if (null != a) {
                        if (!n) {
                            if (xt(a)) {
                                n = typeof a;
                                continue
                            }
                            return !1
                        }
                        if (typeof a !== n) return !1
                    }
                }
            } catch (t) {
                e = {
                    error: t
                }
            } finally {
                try {
                    i && !i.done && (r = o.return) && r.call(o)
                } finally {
                    if (e) throw e.error
                }
            }
            return !0
        }(t) : xt(t))
    }

    function xt(t) {
        switch (typeof t) {
            case "number":
            case "boolean":
            case "string":
                return !0
        }
        return !1
    }
    var Nt, Mt = function(t) {
        ut.error(function(t) {
            return "string" == typeof t ? t : JSON.stringify(function(t) {
                for (var e = {}, r = t; null !== r;) Object.getOwnPropertyNames(r).forEach((function(t) {
                    if (!e[t]) {
                        var n = r[t];
                        n && (e[t] = String(n))
                    }
                })), r = Object.getPrototypeOf(r);
                return e
            }(t))
        }(t))
    };

    function Ut(t) {
        try {
            Mt(t)
        } catch (t) {}
    }! function(t) {
        t.AlwaysOff = "always_off", t.AlwaysOn = "always_on", t.ParentBasedAlwaysOff = "parentbased_always_off", t.ParentBasedAlwaysOn = "parentbased_always_on", t.ParentBasedTraceIdRatio = "parentbased_traceidratio", t.TraceIdRatio = "traceidratio"
    }(Nt || (Nt = {}));
    var Bt = ["OTEL_SDK_DISABLED"];

    function Dt(t) {
        return Bt.indexOf(t) > -1
    }
    var jt = ["OTEL_BSP_EXPORT_TIMEOUT", "OTEL_BSP_MAX_EXPORT_BATCH_SIZE", "OTEL_BSP_MAX_QUEUE_SIZE", "OTEL_BSP_SCHEDULE_DELAY", "OTEL_BLRP_EXPORT_TIMEOUT", "OTEL_BLRP_MAX_EXPORT_BATCH_SIZE", "OTEL_BLRP_MAX_QUEUE_SIZE", "OTEL_BLRP_SCHEDULE_DELAY", "OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT", "OTEL_ATTRIBUTE_COUNT_LIMIT", "OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT", "OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT", "OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT", "OTEL_LOGRECORD_ATTRIBUTE_COUNT_LIMIT", "OTEL_SPAN_EVENT_COUNT_LIMIT", "OTEL_SPAN_LINK_COUNT_LIMIT", "OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT", "OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT", "OTEL_EXPORTER_OTLP_TIMEOUT", "OTEL_EXPORTER_OTLP_TRACES_TIMEOUT", "OTEL_EXPORTER_OTLP_METRICS_TIMEOUT", "OTEL_EXPORTER_OTLP_LOGS_TIMEOUT", "OTEL_EXPORTER_JAEGER_AGENT_PORT"];

    function kt(t) {
        return jt.indexOf(t) > -1
    }
    var Gt = ["OTEL_NO_PATCH_MODULES", "OTEL_PROPAGATORS"];

    function Xt(t) {
        return Gt.indexOf(t) > -1
    }
    var Ft = 1 / 0,
        Vt = 128,
        zt = {
            OTEL_SDK_DISABLED: !1,
            CONTAINER_NAME: "",
            ECS_CONTAINER_METADATA_URI_V4: "",
            ECS_CONTAINER_METADATA_URI: "",
            HOSTNAME: "",
            KUBERNETES_SERVICE_HOST: "",
            NAMESPACE: "",
            OTEL_BSP_EXPORT_TIMEOUT: 3e4,
            OTEL_BSP_MAX_EXPORT_BATCH_SIZE: 512,
            OTEL_BSP_MAX_QUEUE_SIZE: 2048,
            OTEL_BSP_SCHEDULE_DELAY: 5e3,
            OTEL_BLRP_EXPORT_TIMEOUT: 3e4,
            OTEL_BLRP_MAX_EXPORT_BATCH_SIZE: 512,
            OTEL_BLRP_MAX_QUEUE_SIZE: 2048,
            OTEL_BLRP_SCHEDULE_DELAY: 5e3,
            OTEL_EXPORTER_JAEGER_AGENT_HOST: "",
            OTEL_EXPORTER_JAEGER_AGENT_PORT: 6832,
            OTEL_EXPORTER_JAEGER_ENDPOINT: "",
            OTEL_EXPORTER_JAEGER_PASSWORD: "",
            OTEL_EXPORTER_JAEGER_USER: "",
            OTEL_EXPORTER_OTLP_ENDPOINT: "",
            OTEL_EXPORTER_OTLP_TRACES_ENDPOINT: "",
            OTEL_EXPORTER_OTLP_METRICS_ENDPOINT: "",
            OTEL_EXPORTER_OTLP_LOGS_ENDPOINT: "",
            OTEL_EXPORTER_OTLP_HEADERS: "",
            OTEL_EXPORTER_OTLP_TRACES_HEADERS: "",
            OTEL_EXPORTER_OTLP_METRICS_HEADERS: "",
            OTEL_EXPORTER_OTLP_LOGS_HEADERS: "",
            OTEL_EXPORTER_OTLP_TIMEOUT: 1e4,
            OTEL_EXPORTER_OTLP_TRACES_TIMEOUT: 1e4,
            OTEL_EXPORTER_OTLP_METRICS_TIMEOUT: 1e4,
            OTEL_EXPORTER_OTLP_LOGS_TIMEOUT: 1e4,
            OTEL_EXPORTER_ZIPKIN_ENDPOINT: "http://localhost:9411/api/v2/spans",
            OTEL_LOG_LEVEL: f.INFO,
            OTEL_NO_PATCH_MODULES: [],
            OTEL_PROPAGATORS: ["tracecontext", "baggage"],
            OTEL_RESOURCE_ATTRIBUTES: "",
            OTEL_SERVICE_NAME: "",
            OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT: Ft,
            OTEL_ATTRIBUTE_COUNT_LIMIT: Vt,
            OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT: Ft,
            OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT: Vt,
            OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT: Ft,
            OTEL_LOGRECORD_ATTRIBUTE_COUNT_LIMIT: Vt,
            OTEL_SPAN_EVENT_COUNT_LIMIT: 128,
            OTEL_SPAN_LINK_COUNT_LIMIT: 128,
            OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT: 128,
            OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT: 128,
            OTEL_TRACES_EXPORTER: "",
            OTEL_TRACES_SAMPLER: Nt.ParentBasedAlwaysOn,
            OTEL_TRACES_SAMPLER_ARG: "",
            OTEL_LOGS_EXPORTER: "",
            OTEL_EXPORTER_OTLP_INSECURE: "",
            OTEL_EXPORTER_OTLP_TRACES_INSECURE: "",
            OTEL_EXPORTER_OTLP_METRICS_INSECURE: "",
            OTEL_EXPORTER_OTLP_LOGS_INSECURE: "",
            OTEL_EXPORTER_OTLP_CERTIFICATE: "",
            OTEL_EXPORTER_OTLP_TRACES_CERTIFICATE: "",
            OTEL_EXPORTER_OTLP_METRICS_CERTIFICATE: "",
            OTEL_EXPORTER_OTLP_LOGS_CERTIFICATE: "",
            OTEL_EXPORTER_OTLP_COMPRESSION: "",
            OTEL_EXPORTER_OTLP_TRACES_COMPRESSION: "",
            OTEL_EXPORTER_OTLP_METRICS_COMPRESSION: "",
            OTEL_EXPORTER_OTLP_LOGS_COMPRESSION: "",
            OTEL_EXPORTER_OTLP_CLIENT_KEY: "",
            OTEL_EXPORTER_OTLP_TRACES_CLIENT_KEY: "",
            OTEL_EXPORTER_OTLP_METRICS_CLIENT_KEY: "",
            OTEL_EXPORTER_OTLP_LOGS_CLIENT_KEY: "",
            OTEL_EXPORTER_OTLP_CLIENT_CERTIFICATE: "",
            OTEL_EXPORTER_OTLP_TRACES_CLIENT_CERTIFICATE: "",
            OTEL_EXPORTER_OTLP_METRICS_CLIENT_CERTIFICATE: "",
            OTEL_EXPORTER_OTLP_LOGS_CLIENT_CERTIFICATE: "",
            OTEL_EXPORTER_OTLP_PROTOCOL: "http/protobuf",
            OTEL_EXPORTER_OTLP_TRACES_PROTOCOL: "http/protobuf",
            OTEL_EXPORTER_OTLP_METRICS_PROTOCOL: "http/protobuf",
            OTEL_EXPORTER_OTLP_LOGS_PROTOCOL: "http/protobuf",
            OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE: "cumulative"
        };

    function Ht(t, e, r) {
        if (void 0 !== r[t]) {
            var n = String(r[t]);
            e[t] = "true" === n.toLowerCase()
        }
    }

    function Kt(t, e, r, n, o) {
        if (void 0 === n && (n = -1 / 0), void 0 === o && (o = 1 / 0), void 0 !== r[t]) {
            var i = Number(r[t]);
            isNaN(i) || (e[t] = i < n ? n : i > o ? o : i)
        }
    }

    function Qt(t, e, r, n) {
        void 0 === n && (n = ",");
        var o = r[t];
        "string" == typeof o && (e[t] = o.split(n).map((function(t) {
            return t.trim()
        })))
    }
    var Yt = {
        ALL: f.ALL,
        VERBOSE: f.VERBOSE,
        DEBUG: f.DEBUG,
        INFO: f.INFO,
        WARN: f.WARN,
        ERROR: f.ERROR,
        NONE: f.NONE
    };

    function Zt(t, e, r) {
        var n = r[t];
        if ("string" == typeof n) {
            var o = Yt[n.toUpperCase()];
            null != o && (e[t] = o)
        }
    }

    function Jt(t) {
        var e = {};
        for (var r in zt) {
            var n = r;
            switch (n) {
                case "OTEL_LOG_LEVEL":
                    Zt(n, e, t);
                    break;
                default:
                    if (Dt(n)) Ht(n, e, t);
                    else if (kt(n)) Kt(n, e, t);
                    else if (Xt(n)) Qt(n, e, t);
                    else {
                        var o = t[n];
                        null != o && (e[n] = String(o))
                    }
            }
        }
        return e
    }
    var Wt = "object" == typeof globalThis ? globalThis : "object" == typeof self ? self : "object" == typeof window ? window : "object" == typeof global ? global : {};

    function $t() {
        var t = Jt(Wt);
        return Object.assign({}, zt, t)
    }
    var qt, te = performance,
        ee = ((qt = {})["telemetry.sdk.name"] = "opentelemetry", qt["process.runtime.name"] = "browser", qt["telemetry.sdk.language"] = "webjs", qt["telemetry.sdk.version"] = "1.26.0", qt);
    var re, ne = Math.pow(10, 6),
        oe = Math.pow(10, 9);

    function ie(t) {
        var e = t / 1e3;
        return [Math.trunc(e), Math.round(t % 1e3 * ne)]
    }

    function ae() {
        var t = te.timeOrigin;
        if ("number" != typeof t) {
            var e = te;
            t = e.timing && e.timing.fetchStart
        }
        return t
    }

    function se(t) {
        return 1e6 * t[0] + t[1] / 1e3
    }

    function ue(t) {
        return Array.isArray(t) && 2 === t.length && "number" == typeof t[0] && "number" == typeof t[1]
    }

    function ce(t) {
        return ue(t) || "number" == typeof t || t instanceof Date
    }

    function le(t, e) {
        var r = [t[0] + e[0], t[1] + e[1]];
        return r[1] >= oe && (r[1] -= oe, r[0] += 1), r
    }! function(t) {
        t[t.SUCCESS = 0] = "SUCCESS", t[t.FAILED = 1] = "FAILED"
    }(re || (re = {}));
    var pe = function() {
            function t(t) {
                var e;
                void 0 === t && (t = {}), this._propagators = null !== (e = t.propagators) && void 0 !== e ? e : [], this._fields = Array.from(new Set(this._propagators.map((function(t) {
                    return "function" == typeof t.fields ? t.fields() : []
                })).reduce((function(t, e) {
                    return t.concat(e)
                }), [])))
            }
            return t.prototype.inject = function(t, e, r) {
                var n, o;
                try {
                    for (var i = function(t) {
                            var e = "function" == typeof Symbol && Symbol.iterator,
                                r = e && t[e],
                                n = 0;
                            if (r) return r.call(t);
                            if (t && "number" == typeof t.length) return {
                                next: function() {
                                    return t && n >= t.length && (t = void 0), {
                                        value: t && t[n++],
                                        done: !t
                                    }
                                }
                            };
                            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
                        }(this._propagators), a = i.next(); !a.done; a = i.next()) {
                        var s = a.value;
                        try {
                            s.inject(t, e, r)
                        } catch (t) {
                            ut.warn("Failed to inject with " + s.constructor.name + ". Err: " + t.message)
                        }
                    }
                } catch (t) {
                    n = {
                        error: t
                    }
                } finally {
                    try {
                        a && !a.done && (o = i.return) && o.call(i)
                    } finally {
                        if (n) throw n.error
                    }
                }
            }, t.prototype.extract = function(t, e, r) {
                return this._propagators.reduce((function(t, n) {
                    try {
                        return n.extract(t, e, r)
                    } catch (t) {
                        ut.warn("Failed to inject with " + n.constructor.name + ". Err: " + t.message)
                    }
                    return t
                }), t)
            }, t.prototype.fields = function() {
                return this._fields.slice()
            }, t
        }(),
        fe = new RegExp("^(?:[a-z][_0-9a-z-*/]{0,255}|[a-z0-9][_0-9a-z-*/]{0,240}@[a-z][_0-9a-z-*/]{0,13})$"),
        _e = /^[ -~]{0,255}[!-~]$/,
        he = /,|=/;
    var de = function() {
            function t(t) {
                this._internalState = new Map, t && this._parse(t)
            }
            return t.prototype.set = function(t, e) {
                var r = this._clone();
                return r._internalState.has(t) && r._internalState.delete(t), r._internalState.set(t, e), r
            }, t.prototype.unset = function(t) {
                var e = this._clone();
                return e._internalState.delete(t), e
            }, t.prototype.get = function(t) {
                return this._internalState.get(t)
            }, t.prototype.serialize = function() {
                var t = this;
                return this._keys().reduce((function(e, r) {
                    return e.push(r + "=" + t.get(r)), e
                }), []).join(",")
            }, t.prototype._parse = function(t) {
                t.length > 512 || (this._internalState = t.split(",").reverse().reduce((function(t, e) {
                    var r = e.trim(),
                        n = r.indexOf("=");
                    if (-1 !== n) {
                        var o = r.slice(0, n),
                            i = r.slice(n + 1, e.length);
                        (function(t) {
                            return fe.test(t)
                        })(o) && function(t) {
                            return _e.test(t) && !he.test(t)
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
        }(),
        Ee = "traceparent",
        Te = "tracestate",
        ye = new RegExp("^\\s?((?!ff)[\\da-f]{2})-((?![0]{32})[\\da-f]{32})-((?![0]{16})[\\da-f]{16})-([\\da-f]{2})(-.*)?\\s?$");
    var ve, ge, Oe = function() {
            function t() {}
            return t.prototype.inject = function(t, e, r) {
                var n = vt.getSpanContext(t);
                if (n && !mt(t) && J(n)) {
                    var o = "00-" + n.traceId + "-" + n.spanId + "-0" + Number(n.traceFlags || L.NONE).toString(16);
                    r.set(e, Ee, o), n.traceState && r.set(e, Te, n.traceState.serialize())
                }
            }, t.prototype.extract = function(t, e, r) {
                var n = r.get(e, Ee);
                if (!n) return t;
                var o = Array.isArray(n) ? n[0] : n;
                if ("string" != typeof o) return t;
                var i = function(t) {
                    var e = ye.exec(t);
                    return e ? "00" === e[1] && e[5] ? null : {
                        traceId: e[2],
                        spanId: e[3],
                        traceFlags: parseInt(e[4], 16)
                    } : null
                }(o);
                if (!i) return t;
                i.isRemote = !0;
                var a = r.get(e, Te);
                if (a) {
                    var s = Array.isArray(a) ? a.join(",") : a;
                    i.traceState = new de("string" == typeof s ? s : void 0)
                }
                return vt.setSpanContext(t, i)
            }, t.prototype.fields = function() {
                return [Ee, Te]
            }, t
        }(),
        me = "[object Null]",
        Se = "[object Undefined]",
        Le = Function.prototype.toString,
        Re = Le.call(Object),
        be = (ve = Object.getPrototypeOf, ge = Object, function(t) {
            return ve(ge(t))
        }),
        Pe = Object.prototype,
        Ae = Pe.hasOwnProperty,
        we = Symbol ? Symbol.toStringTag : void 0,
        Ce = Pe.toString;

    function Ie(t) {
        if (! function(t) {
                return null != t && "object" == typeof t
            }(t) || "[object Object]" !== function(t) {
                if (null == t) return void 0 === t ? Se : me;
                return we && we in Object(t) ? function(t) {
                    var e = Ae.call(t, we),
                        r = t[we],
                        n = !1;
                    try {
                        t[we] = void 0, n = !0
                    } catch (t) {}
                    var o = Ce.call(t);
                    n && (e ? t[we] = r : delete t[we]);
                    return o
                }(t) : function(t) {
                    return Ce.call(t)
                }(t)
            }(t)) return !1;
        var e = be(t);
        if (null === e) return !0;
        var r = Ae.call(e, "constructor") && e.constructor;
        return "function" == typeof r && r instanceof r && Le.call(r) === Re
    }

    function xe(t) {
        return Ue(t) ? t.slice() : t
    }

    function Ne(t, e, r, n) {
        var o;
        if (void 0 === r && (r = 0), !(r > 20)) {
            if (r++, je(t) || je(e) || Be(e)) o = xe(e);
            else if (Ue(t)) {
                if (o = t.slice(), Ue(e))
                    for (var i = 0, a = e.length; i < a; i++) o.push(xe(e[i]));
                else if (De(e))
                    for (i = 0, a = (s = Object.keys(e)).length; i < a; i++) {
                        o[u = s[i]] = xe(e[u])
                    }
            } else if (De(t))
                if (De(e)) {
                    if (! function(t, e) {
                            if (!Ie(t) || !Ie(e)) return !1;
                            return !0
                        }(t, e)) return e;
                    o = Object.assign({}, t);
                    var s;
                    for (i = 0, a = (s = Object.keys(e)).length; i < a; i++) {
                        var u, c = e[u = s[i]];
                        if (je(c)) void 0 === c ? delete o[u] : o[u] = c;
                        else {
                            var l = o[u],
                                p = c;
                            if (Me(t, u, n) || Me(e, u, n)) delete o[u];
                            else {
                                if (De(l) && De(p)) {
                                    var f = n.get(l) || [],
                                        _ = n.get(p) || [];
                                    f.push({
                                        obj: t,
                                        key: u
                                    }), _.push({
                                        obj: e,
                                        key: u
                                    }), n.set(l, f), n.set(p, _)
                                }
                                o[u] = Ne(o[u], c, r, n)
                            }
                        }
                    }
                } else o = e;
            return o
        }
    }

    function Me(t, e, r) {
        for (var n = r.get(t[e]) || [], o = 0, i = n.length; o < i; o++) {
            var a = n[o];
            if (a.key === e && a.obj === t) return !0
        }
        return !1
    }

    function Ue(t) {
        return Array.isArray(t)
    }

    function Be(t) {
        return "function" == typeof t
    }

    function De(t) {
        return !je(t) && !Ue(t) && !Be(t) && "object" == typeof t
    }

    function je(t) {
        return "string" == typeof t || "number" == typeof t || "boolean" == typeof t || void 0 === t || t instanceof Date || t instanceof RegExp || null === t
    }
    var ke = function() {
            function t() {
                var t = this;
                this._promise = new Promise((function(e, r) {
                    t._resolve = e, t._reject = r
                }))
            }
            return Object.defineProperty(t.prototype, "promise", {
                get: function() {
                    return this._promise
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype.resolve = function(t) {
                this._resolve(t)
            }, t.prototype.reject = function(t) {
                this._reject(t)
            }, t
        }(),
        Ge = function(t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var n, o, i = r.call(t),
                a = [];
            try {
                for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value)
            } catch (t) {
                o = {
                    error: t
                }
            } finally {
                try {
                    n && !n.done && (r = i.return) && r.call(i)
                } finally {
                    if (o) throw o.error
                }
            }
            return a
        },
        Xe = function(t, e, r) {
            if (r || 2 === arguments.length)
                for (var n, o = 0, i = e.length; o < i; o++) !n && o in e || (n || (n = Array.prototype.slice.call(e, 0, o)), n[o] = e[o]);
            return t.concat(n || Array.prototype.slice.call(e))
        },
        Fe = function() {
            function t(t, e) {
                this._callback = t, this._that = e, this._isCalled = !1, this._deferred = new ke
            }
            return Object.defineProperty(t.prototype, "isCalled", {
                get: function() {
                    return this._isCalled
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "promise", {
                get: function() {
                    return this._deferred.promise
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype.call = function() {
                for (var t, e = this, r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
                if (!this._isCalled) {
                    this._isCalled = !0;
                    try {
                        Promise.resolve((t = this._callback).call.apply(t, Xe([this._that], Ge(r), !1))).then((function(t) {
                            return e._deferred.resolve(t)
                        }), (function(t) {
                            return e._deferred.reject(t)
                        }))
                    } catch (t) {
                        this._deferred.reject(t)
                    }
                }
                return this._deferred.promise
            }, t
        }();
    var Ve, ze = {
            _export: function(t, e) {
                return new Promise((function(r) {
                    st.with(Ot(st.active()), (function() {
                        t.export(e, (function(t) {
                            r(t)
                        }))
                    }))
                }))
            }
        },
        He = function(t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var n, o, i = r.call(t),
                a = [];
            try {
                for (;
                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value)
            } catch (t) {
                o = {
                    error: t
                }
            } finally {
                try {
                    n && !n.done && (r = i.return) && r.call(i)
                } finally {
                    if (o) throw o.error
                }
            }
            return a
        },
        Ke = t("Span", function() {
            function t(t, e, r, n, o, i, a, s, u, c) {
                void 0 === a && (a = []), this.attributes = {}, this.links = [], this.events = [], this._droppedAttributesCount = 0, this._droppedEventsCount = 0, this._droppedLinksCount = 0, this.status = {
                    code: rt.UNSET
                }, this.endTime = [0, 0], this._ended = !1, this._duration = [-1, -1], this.name = r, this._spanContext = n, this.parentSpanId = i, this.kind = o, this.links = a;
                var l = Date.now();
                this._performanceStartTime = te.now(), this._performanceOffset = l - (this._performanceStartTime + ae()), this._startTimeProvided = null != s, this.startTime = this._getTime(null != s ? s : l), this.resource = t.resource, this.instrumentationLibrary = t.instrumentationLibrary, this._spanLimits = t.getSpanLimits(), this._attributeValueLengthLimit = this._spanLimits.attributeValueLengthLimit || 0, null != c && this.setAttributes(c), this._spanProcessor = t.getActiveSpanProcessor(), this._spanProcessor.onStart(this, e)
            }
            return t.prototype.spanContext = function() {
                return this._spanContext
            }, t.prototype.setAttribute = function(t, e) {
                return null == e || this._isSpanEnded() ? this : 0 === t.length ? (ut.warn("Invalid attribute key: " + t), this) : It(e) ? Object.keys(this.attributes).length >= this._spanLimits.attributeCountLimit && !Object.prototype.hasOwnProperty.call(this.attributes, t) ? (this._droppedAttributesCount++, this) : (this.attributes[t] = this._truncateToSize(e), this) : (ut.warn("Invalid attribute value set for key: " + t), this)
            }, t.prototype.setAttributes = function(t) {
                var e, r;
                try {
                    for (var n = function(t) {
                            var e = "function" == typeof Symbol && Symbol.iterator,
                                r = e && t[e],
                                n = 0;
                            if (r) return r.call(t);
                            if (t && "number" == typeof t.length) return {
                                next: function() {
                                    return t && n >= t.length && (t = void 0), {
                                        value: t && t[n++],
                                        done: !t
                                    }
                                }
                            };
                            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
                        }(Object.entries(t)), o = n.next(); !o.done; o = n.next()) {
                        var i = He(o.value, 2),
                            a = i[0],
                            s = i[1];
                        this.setAttribute(a, s)
                    }
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        o && !o.done && (r = n.return) && r.call(n)
                    } finally {
                        if (e) throw e.error
                    }
                }
                return this
            }, t.prototype.addEvent = function(t, e, r) {
                if (this._isSpanEnded()) return this;
                if (0 === this._spanLimits.eventCountLimit) return ut.warn("No events allowed."), this._droppedEventsCount++, this;
                this.events.length >= this._spanLimits.eventCountLimit && (0 === this._droppedEventsCount && ut.debug("Dropping extra events."), this.events.shift(), this._droppedEventsCount++), ce(e) && (ce(r) || (r = e), e = void 0);
                var n = wt(e);
                return this.events.push({
                    name: t,
                    attributes: n,
                    time: this._getTime(r),
                    droppedAttributesCount: 0
                }), this
            }, t.prototype.addLink = function(t) {
                return this.links.push(t), this
            }, t.prototype.addLinks = function(t) {
                var e;
                return (e = this.links).push.apply(e, function(t, e, r) {
                    if (r || 2 === arguments.length)
                        for (var n, o = 0, i = e.length; o < i; o++) !n && o in e || (n || (n = Array.prototype.slice.call(e, 0, o)), n[o] = e[o]);
                    return t.concat(n || Array.prototype.slice.call(e))
                }([], He(t), !1)), this
            }, t.prototype.setStatus = function(t) {
                return this._isSpanEnded() || (this.status = t), this
            }, t.prototype.updateName = function(t) {
                return this._isSpanEnded() || (this.name = t), this
            }, t.prototype.end = function(t) {
                this._isSpanEnded() ? ut.error(this.name + " " + this._spanContext.traceId + "-" + this._spanContext.spanId + " - You can only call end() on a span once.") : (this._ended = !0, this.endTime = this._getTime(t), this._duration = function(t, e) {
                    var r = e[0] - t[0],
                        n = e[1] - t[1];
                    return n < 0 && (r -= 1, n += oe), [r, n]
                }(this.startTime, this.endTime), this._duration[0] < 0 && (ut.warn("Inconsistent start and end time, startTime > endTime. Setting span duration to 0ms.", this.startTime, this.endTime), this.endTime = this.startTime.slice(), this._duration = [0, 0]), this._droppedEventsCount > 0 && ut.warn("Dropped " + this._droppedEventsCount + " events because eventCountLimit reached"), this._spanProcessor.onEnd(this))
            }, t.prototype._getTime = function(t) {
                if ("number" == typeof t && t < te.now()) return e = t + this._performanceOffset, le(ie(ae()), ie("number" == typeof e ? e : te.now()));
                var e;
                if ("number" == typeof t) return ie(t);
                if (t instanceof Date) return ie(t.getTime());
                if (ue(t)) return t;
                if (this._startTimeProvided) return ie(Date.now());
                var r = te.now() - this._performanceStartTime;
                return le(this.startTime, ie(r))
            }, t.prototype.isRecording = function() {
                return !1 === this._ended
            }, t.prototype.recordException = function(t, e) {
                var r = {};
                "string" == typeof t ? r["exception.message"] = t : t && (t.code ? r["exception.type"] = t.code.toString() : t.name && (r["exception.type"] = t.name), t.message && (r["exception.message"] = t.message), t.stack && (r["exception.stacktrace"] = t.stack)), r["exception.type"] || r["exception.message"] ? this.addEvent("exception", r, e) : ut.warn("Failed to record an exception " + t)
            }, Object.defineProperty(t.prototype, "duration", {
                get: function() {
                    return this._duration
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "ended", {
                get: function() {
                    return this._ended
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "droppedAttributesCount", {
                get: function() {
                    return this._droppedAttributesCount
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "droppedEventsCount", {
                get: function() {
                    return this._droppedEventsCount
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "droppedLinksCount", {
                get: function() {
                    return this._droppedLinksCount
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype._isSpanEnded = function() {
                return this._ended && ut.warn("Can not execute the operation on ended Span {traceId: " + this._spanContext.traceId + ", spanId: " + this._spanContext.spanId + "}"), this._ended
            }, t.prototype._truncateToLimitUtil = function(t, e) {
                return t.length <= e ? t : t.substr(0, e)
            }, t.prototype._truncateToSize = function(t) {
                var e = this,
                    r = this._attributeValueLengthLimit;
                return r <= 0 ? (ut.warn("Attribute value limit must be positive, got " + r), t) : "string" == typeof t ? this._truncateToLimitUtil(t, r) : Array.isArray(t) ? t.map((function(t) {
                    return "string" == typeof t ? e._truncateToLimitUtil(t, r) : t
                })) : t
            }, t
        }());
    ! function(t) {
        t[t.NOT_RECORD = 0] = "NOT_RECORD", t[t.RECORD = 1] = "RECORD", t[t.RECORD_AND_SAMPLED = 2] = "RECORD_AND_SAMPLED"
    }(Ve || (Ve = t("SamplingDecision", {})));
    var Qe = t("AlwaysOffSampler", function() {
            function t() {}
            return t.prototype.shouldSample = function() {
                return {
                    decision: Ve.NOT_RECORD
                }
            }, t.prototype.toString = function() {
                return "AlwaysOffSampler"
            }, t
        }()),
        Ye = t("AlwaysOnSampler", function() {
            function t() {}
            return t.prototype.shouldSample = function() {
                return {
                    decision: Ve.RECORD_AND_SAMPLED
                }
            }, t.prototype.toString = function() {
                return "AlwaysOnSampler"
            }, t
        }()),
        Ze = t("ParentBasedSampler", function() {
            function t(t) {
                var e, r, n, o;
                this._root = t.root, this._root || (Ut(new Error("ParentBasedSampler must have a root sampler configured")), this._root = new Ye), this._remoteParentSampled = null !== (e = t.remoteParentSampled) && void 0 !== e ? e : new Ye, this._remoteParentNotSampled = null !== (r = t.remoteParentNotSampled) && void 0 !== r ? r : new Qe, this._localParentSampled = null !== (n = t.localParentSampled) && void 0 !== n ? n : new Ye, this._localParentNotSampled = null !== (o = t.localParentNotSampled) && void 0 !== o ? o : new Qe
            }
            return t.prototype.shouldSample = function(t, e, r, n, o, i) {
                var a = vt.getSpanContext(t);
                return a && J(a) ? a.isRemote ? a.traceFlags & L.SAMPLED ? this._remoteParentSampled.shouldSample(t, e, r, n, o, i) : this._remoteParentNotSampled.shouldSample(t, e, r, n, o, i) : a.traceFlags & L.SAMPLED ? this._localParentSampled.shouldSample(t, e, r, n, o, i) : this._localParentNotSampled.shouldSample(t, e, r, n, o, i) : this._root.shouldSample(t, e, r, n, o, i)
            }, t.prototype.toString = function() {
                return "ParentBased{root=" + this._root.toString() + ", remoteParentSampled=" + this._remoteParentSampled.toString() + ", remoteParentNotSampled=" + this._remoteParentNotSampled.toString() + ", localParentSampled=" + this._localParentSampled.toString() + ", localParentNotSampled=" + this._localParentNotSampled.toString() + "}"
            }, t
        }()),
        Je = t("TraceIdRatioBasedSampler", function() {
            function t(t) {
                void 0 === t && (t = 0), this._ratio = t, this._ratio = this._normalize(t), this._upperBound = Math.floor(4294967295 * this._ratio)
            }
            return t.prototype.shouldSample = function(t, e) {
                return {
                    decision: Z(e) && this._accumulate(e) < this._upperBound ? Ve.RECORD_AND_SAMPLED : Ve.NOT_RECORD
                }
            }, t.prototype.toString = function() {
                return "TraceIdRatioBased{" + this._ratio + "}"
            }, t.prototype._normalize = function(t) {
                return "number" != typeof t || isNaN(t) ? 0 : t >= 1 ? 1 : t <= 0 ? 0 : t
            }, t.prototype._accumulate = function(t) {
                for (var e = 0, r = 0; r < t.length / 8; r++) {
                    var n = 8 * r;
                    e = (e ^ parseInt(t.slice(n, n + 8), 16)) >>> 0
                }
                return e
            }, t
        }()),
        We = $t(),
        $e = Nt.AlwaysOn;

    function qe() {
        var t = $t();
        return {
            sampler: tr(We),
            forceFlushTimeoutMillis: 3e4,
            generalLimits: {
                attributeValueLengthLimit: t.OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT,
                attributeCountLimit: t.OTEL_ATTRIBUTE_COUNT_LIMIT
            },
            spanLimits: {
                attributeValueLengthLimit: t.OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT,
                attributeCountLimit: t.OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT,
                linkCountLimit: t.OTEL_SPAN_LINK_COUNT_LIMIT,
                eventCountLimit: t.OTEL_SPAN_EVENT_COUNT_LIMIT,
                attributePerEventCountLimit: t.OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT,
                attributePerLinkCountLimit: t.OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT
            }
        }
    }

    function tr(t) {
        switch (void 0 === t && (t = $t()), t.OTEL_TRACES_SAMPLER) {
            case Nt.AlwaysOn:
                return new Ye;
            case Nt.AlwaysOff:
                return new Qe;
            case Nt.ParentBasedAlwaysOn:
                return new Ze({
                    root: new Ye
                });
            case Nt.ParentBasedAlwaysOff:
                return new Ze({
                    root: new Qe
                });
            case Nt.TraceIdRatio:
                return new Je(er(t));
            case Nt.ParentBasedTraceIdRatio:
                return new Ze({
                    root: new Je(er(t))
                });
            default:
                return ut.error('OTEL_TRACES_SAMPLER value "' + t.OTEL_TRACES_SAMPLER + " invalid, defaulting to " + $e + '".'), new Ye
        }
    }

    function er(t) {
        if (void 0 === t.OTEL_TRACES_SAMPLER_ARG || "" === t.OTEL_TRACES_SAMPLER_ARG) return ut.error("OTEL_TRACES_SAMPLER_ARG is blank, defaulting to 1."), 1;
        var e = Number(t.OTEL_TRACES_SAMPLER_ARG);
        return isNaN(e) ? (ut.error("OTEL_TRACES_SAMPLER_ARG=" + t.OTEL_TRACES_SAMPLER_ARG + " was given, but it is invalid, defaulting to 1."), 1) : e < 0 || e > 1 ? (ut.error("OTEL_TRACES_SAMPLER_ARG=" + t.OTEL_TRACES_SAMPLER_ARG + " was given, but it is out of range ([0..1]), defaulting to 1."), 1) : e
    }

    function rr(t) {
        var e, r, n, o, i, a, s, u, c, l, p, f, _ = Object.assign({}, t.spanLimits),
            h = Jt(Wt);
        return _.attributeCountLimit = null !== (a = null !== (i = null !== (o = null !== (r = null === (e = t.spanLimits) || void 0 === e ? void 0 : e.attributeCountLimit) && void 0 !== r ? r : null === (n = t.generalLimits) || void 0 === n ? void 0 : n.attributeCountLimit) && void 0 !== o ? o : h.OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT) && void 0 !== i ? i : h.OTEL_ATTRIBUTE_COUNT_LIMIT) && void 0 !== a ? a : Vt, _.attributeValueLengthLimit = null !== (f = null !== (p = null !== (l = null !== (u = null === (s = t.spanLimits) || void 0 === s ? void 0 : s.attributeValueLengthLimit) && void 0 !== u ? u : null === (c = t.generalLimits) || void 0 === c ? void 0 : c.attributeValueLengthLimit) && void 0 !== l ? l : h.OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT) && void 0 !== p ? p : h.OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT) && void 0 !== f ? f : Ft, Object.assign({}, t, {
            spanLimits: _
        })
    }
    var nr, or = function() {
            function t(t, e) {
                this._exporter = t, this._isExporting = !1, this._finishedSpans = [], this._droppedSpansCount = 0;
                var r = $t();
                this._maxExportBatchSize = "number" == typeof(null == e ? void 0 : e.maxExportBatchSize) ? e.maxExportBatchSize : r.OTEL_BSP_MAX_EXPORT_BATCH_SIZE, this._maxQueueSize = "number" == typeof(null == e ? void 0 : e.maxQueueSize) ? e.maxQueueSize : r.OTEL_BSP_MAX_QUEUE_SIZE, this._scheduledDelayMillis = "number" == typeof(null == e ? void 0 : e.scheduledDelayMillis) ? e.scheduledDelayMillis : r.OTEL_BSP_SCHEDULE_DELAY, this._exportTimeoutMillis = "number" == typeof(null == e ? void 0 : e.exportTimeoutMillis) ? e.exportTimeoutMillis : r.OTEL_BSP_EXPORT_TIMEOUT, this._shutdownOnce = new Fe(this._shutdown, this), this._maxExportBatchSize > this._maxQueueSize && (ut.warn("BatchSpanProcessor: maxExportBatchSize must be smaller or equal to maxQueueSize, setting maxExportBatchSize to match maxQueueSize"), this._maxExportBatchSize = this._maxQueueSize)
            }
            return t.prototype.forceFlush = function() {
                return this._shutdownOnce.isCalled ? this._shutdownOnce.promise : this._flushAll()
            }, t.prototype.onStart = function(t, e) {}, t.prototype.onEnd = function(t) {
                this._shutdownOnce.isCalled || 0 != (t.spanContext().traceFlags & L.SAMPLED) && this._addToBuffer(t)
            }, t.prototype.shutdown = function() {
                return this._shutdownOnce.call()
            }, t.prototype._shutdown = function() {
                var t = this;
                return Promise.resolve().then((function() {
                    return t.onShutdown()
                })).then((function() {
                    return t._flushAll()
                })).then((function() {
                    return t._exporter.shutdown()
                }))
            }, t.prototype._addToBuffer = function(t) {
                if (this._finishedSpans.length >= this._maxQueueSize) return 0 === this._droppedSpansCount && ut.debug("maxQueueSize reached, dropping spans"), void this._droppedSpansCount++;
                this._droppedSpansCount > 0 && (ut.warn("Dropped " + this._droppedSpansCount + " spans because maxQueueSize reached"), this._droppedSpansCount = 0), this._finishedSpans.push(t), this._maybeStartTimer()
            }, t.prototype._flushAll = function() {
                var t = this;
                return new Promise((function(e, r) {
                    for (var n = [], o = 0, i = Math.ceil(t._finishedSpans.length / t._maxExportBatchSize); o < i; o++) n.push(t._flushOneBatch());
                    Promise.all(n).then((function() {
                        e()
                    })).catch(r)
                }))
            }, t.prototype._flushOneBatch = function() {
                var t = this;
                return this._clearTimer(), 0 === this._finishedSpans.length ? Promise.resolve() : new Promise((function(e, r) {
                    var n = setTimeout((function() {
                        r(new Error("Timeout"))
                    }), t._exportTimeoutMillis);
                    st.with(Ot(st.active()), (function() {
                        var o;
                        t._finishedSpans.length <= t._maxExportBatchSize ? (o = t._finishedSpans, t._finishedSpans = []) : o = t._finishedSpans.splice(0, t._maxExportBatchSize);
                        for (var i = function() {
                                return t._exporter.export(o, (function(t) {
                                    var o;
                                    clearTimeout(n), t.code === re.SUCCESS ? e() : r(null !== (o = t.error) && void 0 !== o ? o : new Error("BatchSpanProcessor: span export failed"))
                                }))
                            }, a = null, s = 0, u = o.length; s < u; s++) {
                            var c = o[s];
                            c.resource.asyncAttributesPending && c.resource.waitForAsyncAttributes && (null != a || (a = []), a.push(c.resource.waitForAsyncAttributes()))
                        }
                        null === a ? i() : Promise.all(a).then(i, (function(t) {
                            Ut(t), r(t)
                        }))
                    }))
                }))
            }, t.prototype._maybeStartTimer = function() {
                var t = this;
                if (!this._isExporting) {
                    var e = function() {
                        t._isExporting = !0, t._flushOneBatch().finally((function() {
                            t._isExporting = !1, t._finishedSpans.length > 0 && (t._clearTimer(), t._maybeStartTimer())
                        })).catch((function(e) {
                            t._isExporting = !1, Ut(e)
                        }))
                    };
                    if (this._finishedSpans.length >= this._maxExportBatchSize) return e();
                    void 0 === this._timer && (this._timer = setTimeout((function() {
                        return e()
                    }), this._scheduledDelayMillis), this._timer)
                }
            }, t.prototype._clearTimer = function() {
                void 0 !== this._timer && (clearTimeout(this._timer), this._timer = void 0)
            }, t
        }(),
        ir = (nr = function(t, e) {
            return (nr = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
                })(t, e)
        }, function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

            function r() {
                this.constructor = t
            }
            nr(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        }),
        ar = t("BatchSpanProcessor", function(t) {
            function e(e, r) {
                var n = t.call(this, e, r) || this;
                return n.onInit(r), n
            }
            return ir(e, t), e.prototype.onInit = function(t) {
                var e = this;
                !0 !== (null == t ? void 0 : t.disableAutoFlushOnDocumentHide) && "undefined" != typeof document && (this._visibilityChangeListener = function() {
                    "hidden" === document.visibilityState && e.forceFlush()
                }, this._pageHideListener = function() {
                    e.forceFlush()
                }, document.addEventListener("visibilitychange", this._visibilityChangeListener), document.addEventListener("pagehide", this._pageHideListener))
            }, e.prototype.onShutdown = function() {
                "undefined" != typeof document && (this._visibilityChangeListener && document.removeEventListener("visibilitychange", this._visibilityChangeListener), this._pageHideListener && document.removeEventListener("pagehide", this._pageHideListener))
            }, e
        }(or)),
        sr = t("RandomIdGenerator", (function() {
            this.generateTraceId = cr(16), this.generateSpanId = cr(8)
        })),
        ur = Array(32);

    function cr(t) {
        return function() {
            for (var e = 0; e < 2 * t; e++) ur[e] = Math.floor(16 * Math.random()) + 48, ur[e] >= 58 && (ur[e] += 39);
            return String.fromCharCode.apply(null, ur.slice(0, 2 * t))
        }
    }
    var lr = t("Tracer", function() {
        function t(t, e, r) {
            this._tracerProvider = r;
            var n, o, i, a, s = (n = e, o = {
                sampler: tr()
            }, i = qe(), (a = Object.assign({}, i, o, n)).generalLimits = Object.assign({}, i.generalLimits, n.generalLimits || {}), a.spanLimits = Object.assign({}, i.spanLimits, n.spanLimits || {}), a);
            this._sampler = s.sampler, this._generalLimits = s.generalLimits, this._spanLimits = s.spanLimits, this._idGenerator = e.idGenerator || new sr, this.resource = r.resource, this.instrumentationLibrary = t
        }
        return t.prototype.startSpan = function(t, e, r) {
            var n, o, i;
            void 0 === e && (e = {}), void 0 === r && (r = st.active()), e.root && (r = vt.deleteSpan(r));
            var a = vt.getSpan(r);
            if (mt(r)) return ut.debug("Instrumentation suppressed, returning Noop Span"), vt.wrapSpanContext(j);
            var s, u, c, l = null == a ? void 0 : a.spanContext(),
                p = this._idGenerator.generateSpanId();
            l && vt.isSpanContextValid(l) ? (s = l.traceId, u = l.traceState, c = l.spanId) : s = this._idGenerator.generateTraceId();
            var f = null !== (n = e.kind) && void 0 !== n ? n : et.INTERNAL,
                _ = (null !== (o = e.links) && void 0 !== o ? o : []).map((function(t) {
                    return {
                        context: t.context,
                        attributes: wt(t.attributes)
                    }
                })),
                h = wt(e.attributes),
                d = this._sampler.shouldSample(r, s, t, f, h, _);
            u = null !== (i = d.traceState) && void 0 !== i ? i : u;
            var E = {
                traceId: s,
                spanId: p,
                traceFlags: d.decision === tt.RECORD_AND_SAMPLED ? L.SAMPLED : L.NONE,
                traceState: u
            };
            if (d.decision === tt.NOT_RECORD) return ut.debug("Recording is off, propagating context in a non-recording span"), vt.wrapSpanContext(E);
            var T = wt(Object.assign(h, d.attributes));
            return new Ke(this, r, t, E, f, c, _, e.startTime, void 0, T)
        }, t.prototype.startActiveSpan = function(t, e, r, n) {
            var o, i, a;
            if (!(arguments.length < 2)) {
                2 === arguments.length ? a = e : 3 === arguments.length ? (o = e, a = r) : (o = e, i = r, a = n);
                var s = null != i ? i : st.active(),
                    u = this.startSpan(t, o, s),
                    c = vt.setSpan(s, u);
                return st.with(c, a, void 0, u)
            }
        }, t.prototype.getGeneralLimits = function() {
            return this._generalLimits
        }, t.prototype.getSpanLimits = function() {
            return this._spanLimits
        }, t.prototype.getActiveSpanProcessor = function() {
            return this._tracerProvider.getActiveSpanProcessor()
        }, t
    }());
    var pr, fr = function() {
            return (fr = Object.assign || function(t) {
                for (var e, r = 1, n = arguments.length; r < n; r++)
                    for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t
            }).apply(this, arguments)
        },
        _r = function(t, e, r, n) {
            return new(r || (r = Promise))((function(o, i) {
                function a(t) {
                    try {
                        u(n.next(t))
                    } catch (t) {
                        i(t)
                    }
                }

                function s(t) {
                    try {
                        u(n.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }

                function u(t) {
                    var e;
                    t.done ? o(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                        t(e)
                    }))).then(a, s)
                }
                u((n = n.apply(t, e || [])).next())
            }))
        },
        hr = function(t, e) {
            var r, n, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0]) throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: s(0),
                throw: s(1),
                return: s(2)
            }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }), i;

            function s(i) {
                return function(s) {
                    return function(i) {
                        if (r) throw new TypeError("Generator is already executing.");
                        for (; a;) try {
                            if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                            switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return a.label++, {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++, n = i[1], i = [0];
                                    continue;
                                case 7:
                                    i = a.ops.pop(), a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        a.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && a.label < o[1]) {
                                        a.label = o[1], o = i;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2], a.ops.push(i);
                                        break
                                    }
                                    o[2] && a.ops.pop(), a.trys.pop();
                                    continue
                            }
                            i = e.call(t, a)
                        } catch (t) {
                            i = [6, t], n = 0
                        } finally {
                            r = o = 0
                        }
                        if (5 & i[0]) throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, s])
                }
            }
        },
        dr = function() {
            function t(t, e) {
                var r, n = this;
                this._attributes = t, this.asyncAttributesPending = null != e, this._syncAttributes = null !== (r = this._attributes) && void 0 !== r ? r : {}, this._asyncAttributesPromise = null == e ? void 0 : e.then((function(t) {
                    return n._attributes = Object.assign({}, n._attributes, t), n.asyncAttributesPending = !1, t
                }), (function(t) {
                    return ut.debug("a resource's async attributes promise rejected: %s", t), n.asyncAttributesPending = !1, {}
                }))
            }
            return t.empty = function() {
                return t.EMPTY
            }, t.default = function() {
                var e;
                return new t(((e = {})["service.name"] = "unknown_service", e["telemetry.sdk.language"] = ee["telemetry.sdk.language"], e["telemetry.sdk.name"] = ee["telemetry.sdk.name"], e["telemetry.sdk.version"] = ee["telemetry.sdk.version"], e))
            }, Object.defineProperty(t.prototype, "attributes", {
                get: function() {
                    var t;
                    return this.asyncAttributesPending && ut.error("Accessing resource attributes before async attributes settled"), null !== (t = this._attributes) && void 0 !== t ? t : {}
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype.waitForAsyncAttributes = function() {
                return _r(this, void 0, void 0, (function() {
                    return hr(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return this.asyncAttributesPending ? [4, this._asyncAttributesPromise] : [3, 2];
                            case 1:
                                t.sent(), t.label = 2;
                            case 2:
                                return [2]
                        }
                    }))
                }))
            }, t.prototype.merge = function(e) {
                var r, n = this;
                if (!e) return this;
                var o = fr(fr({}, this._syncAttributes), null !== (r = e._syncAttributes) && void 0 !== r ? r : e.attributes);
                return this._asyncAttributesPromise || e._asyncAttributesPromise ? new t(o, Promise.all([this._asyncAttributesPromise, e._asyncAttributesPromise]).then((function(t) {
                    var r, o = function(t, e) {
                            var r = "function" == typeof Symbol && t[Symbol.iterator];
                            if (!r) return t;
                            var n, o, i = r.call(t),
                                a = [];
                            try {
                                for (;
                                    (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value)
                            } catch (t) {
                                o = {
                                    error: t
                                }
                            } finally {
                                try {
                                    n && !n.done && (r = i.return) && r.call(i)
                                } finally {
                                    if (o) throw o.error
                                }
                            }
                            return a
                        }(t, 2),
                        i = o[0],
                        a = o[1];
                    return fr(fr(fr(fr({}, n._syncAttributes), i), null !== (r = e._syncAttributes) && void 0 !== r ? r : e.attributes), a)
                }))) : new t(o)
            }, t.EMPTY = new t({}), t
        }(),
        Er = function(t) {
            var e = "function" == typeof Symbol && Symbol.iterator,
                r = e && t[e],
                n = 0;
            if (r) return r.call(t);
            if (t && "number" == typeof t.length) return {
                next: function() {
                    return t && n >= t.length && (t = void 0), {
                        value: t && t[n++],
                        done: !t
                    }
                }
            };
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        },
        Tr = function() {
            function t(t) {
                this._spanProcessors = t
            }
            return t.prototype.forceFlush = function() {
                var t, e, r = [];
                try {
                    for (var n = Er(this._spanProcessors), o = n.next(); !o.done; o = n.next()) {
                        var i = o.value;
                        r.push(i.forceFlush())
                    }
                } catch (e) {
                    t = {
                        error: e
                    }
                } finally {
                    try {
                        o && !o.done && (e = n.return) && e.call(n)
                    } finally {
                        if (t) throw t.error
                    }
                }
                return new Promise((function(t) {
                    Promise.all(r).then((function() {
                        t()
                    })).catch((function(e) {
                        Ut(e || new Error("MultiSpanProcessor: forceFlush failed")), t()
                    }))
                }))
            }, t.prototype.onStart = function(t, e) {
                var r, n;
                try {
                    for (var o = Er(this._spanProcessors), i = o.next(); !i.done; i = o.next()) {
                        i.value.onStart(t, e)
                    }
                } catch (t) {
                    r = {
                        error: t
                    }
                } finally {
                    try {
                        i && !i.done && (n = o.return) && n.call(o)
                    } finally {
                        if (r) throw r.error
                    }
                }
            }, t.prototype.onEnd = function(t) {
                var e, r;
                try {
                    for (var n = Er(this._spanProcessors), o = n.next(); !o.done; o = n.next()) {
                        o.value.onEnd(t)
                    }
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        o && !o.done && (r = n.return) && r.call(n)
                    } finally {
                        if (e) throw e.error
                    }
                }
            }, t.prototype.shutdown = function() {
                var t, e, r = [];
                try {
                    for (var n = Er(this._spanProcessors), o = n.next(); !o.done; o = n.next()) {
                        var i = o.value;
                        r.push(i.shutdown())
                    }
                } catch (e) {
                    t = {
                        error: e
                    }
                } finally {
                    try {
                        o && !o.done && (e = n.return) && e.call(n)
                    } finally {
                        if (t) throw t.error
                    }
                }
                return new Promise((function(t, e) {
                    Promise.all(r).then((function() {
                        t()
                    }), e)
                }))
            }, t
        }(),
        yr = t("NoopSpanProcessor", function() {
            function t() {}
            return t.prototype.onStart = function(t, e) {}, t.prototype.onEnd = function(t) {}, t.prototype.shutdown = function() {
                return Promise.resolve()
            }, t.prototype.forceFlush = function() {
                return Promise.resolve()
            }, t
        }());
    ! function(t) {
        t[t.resolved = 0] = "resolved", t[t.timeout = 1] = "timeout", t[t.error = 2] = "error", t[t.unresolved = 3] = "unresolved"
    }(pr || (pr = t("ForceFlushState", {})));
    t("BasicTracerProvider", function() {
        function t(t) {
            var e;
            void 0 === t && (t = {}), this._registeredSpanProcessors = [], this._tracers = new Map;
            var r = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                for (var r = t.shift(), n = new WeakMap; t.length > 0;) r = Ne(r, t.shift(), 0, n);
                return r
            }({}, qe(), rr(t));
            this.resource = null !== (e = r.resource) && void 0 !== e ? e : dr.empty(), this.resource = dr.default().merge(this.resource), this._config = Object.assign({}, r, {
                resource: this.resource
            });
            var n = this._buildExporterFromEnv();
            if (void 0 !== n) {
                var o = new ar(n);
                this.activeSpanProcessor = o
            } else this.activeSpanProcessor = new yr
        }
        return t.prototype.getTracer = function(t, e, r) {
            var n = t + "@" + (e || "") + ":" + ((null == r ? void 0 : r.schemaUrl) || "");
            return this._tracers.has(n) || this._tracers.set(n, new lr({
                name: t,
                version: e,
                schemaUrl: null == r ? void 0 : r.schemaUrl
            }, this._config, this)), this._tracers.get(n)
        }, t.prototype.addSpanProcessor = function(t) {
            0 === this._registeredSpanProcessors.length && this.activeSpanProcessor.shutdown().catch((function(t) {
                return ut.error("Error while trying to shutdown current span processor", t)
            })), this._registeredSpanProcessors.push(t), this.activeSpanProcessor = new Tr(this._registeredSpanProcessors)
        }, t.prototype.getActiveSpanProcessor = function() {
            return this.activeSpanProcessor
        }, t.prototype.register = function(t) {
            void 0 === t && (t = {}), vt.setGlobalTracerProvider(this), void 0 === t.propagator && (t.propagator = this._buildPropagatorFromEnv()), t.contextManager && st.setGlobalContextManager(t.contextManager), t.propagator && Tt.setGlobalPropagator(t.propagator)
        }, t.prototype.forceFlush = function() {
            var t = this._config.forceFlushTimeoutMillis,
                e = this._registeredSpanProcessors.map((function(e) {
                    return new Promise((function(r) {
                        var n, o = setTimeout((function() {
                            r(new Error("Span processor did not completed within timeout period of " + t + " ms")), n = pr.timeout
                        }), t);
                        e.forceFlush().then((function() {
                            clearTimeout(o), n !== pr.timeout && (n = pr.resolved, r(n))
                        })).catch((function(t) {
                            clearTimeout(o), n = pr.error, r(t)
                        }))
                    }))
                }));
            return new Promise((function(t, r) {
                Promise.all(e).then((function(e) {
                    var n = e.filter((function(t) {
                        return t !== pr.resolved
                    }));
                    n.length > 0 ? r(n) : t()
                })).catch((function(t) {
                    return r([t])
                }))
            }))
        }, t.prototype.shutdown = function() {
            return this.activeSpanProcessor.shutdown()
        }, t.prototype._getPropagator = function(t) {
            var e;
            return null === (e = this.constructor._registeredPropagators.get(t)) || void 0 === e ? void 0 : e()
        }, t.prototype._getSpanExporter = function(t) {
            var e;
            return null === (e = this.constructor._registeredExporters.get(t)) || void 0 === e ? void 0 : e()
        }, t.prototype._buildPropagatorFromEnv = function() {
            var t = this,
                e = Array.from(new Set($t().OTEL_PROPAGATORS)),
                r = e.map((function(e) {
                    var r = t._getPropagator(e);
                    return r || ut.warn('Propagator "' + e + '" requested through environment variable is unavailable.'), r
                })).reduce((function(t, e) {
                    return e && t.push(e), t
                }), []);
            return 0 === r.length ? void 0 : 1 === e.length ? r[0] : new pe({
                propagators: r
            })
        }, t.prototype._buildExporterFromEnv = function() {
            var t = $t().OTEL_TRACES_EXPORTER;
            if ("none" !== t && "" !== t) {
                var e = this._getSpanExporter(t);
                return e || ut.error('Exporter "' + t + '" requested through environment variable is unavailable.'), e
            }
        }, t._registeredPropagators = new Map([
            ["tracecontext", function() {
                return new Oe
            }],
            ["baggage", function() {
                return new bt
            }]
        ]), t._registeredExporters = new Map, t
    }()), t("ConsoleSpanExporter", function() {
        function t() {}
        return t.prototype.export = function(t, e) {
            return this._sendSpans(t, e)
        }, t.prototype.shutdown = function() {
            return this._sendSpans([]), this.forceFlush()
        }, t.prototype.forceFlush = function() {
            return Promise.resolve()
        }, t.prototype._exportInfo = function(t) {
            var e;
            return {
                resource: {
                    attributes: t.resource.attributes
                },
                instrumentationScope: t.instrumentationLibrary,
                traceId: t.spanContext().traceId,
                parentId: t.parentSpanId,
                traceState: null === (e = t.spanContext().traceState) || void 0 === e ? void 0 : e.serialize(),
                name: t.name,
                id: t.spanContext().spanId,
                kind: t.kind,
                timestamp: se(t.startTime),
                duration: se(t.duration),
                attributes: t.attributes,
                status: t.status,
                events: t.events,
                links: t.links
            }
        }, t.prototype._sendSpans = function(t, e) {
            var r, n;
            try {
                for (var o = function(t) {
                        var e = "function" == typeof Symbol && Symbol.iterator,
                            r = e && t[e],
                            n = 0;
                        if (r) return r.call(t);
                        if (t && "number" == typeof t.length) return {
                            next: function() {
                                return t && n >= t.length && (t = void 0), {
                                    value: t && t[n++],
                                    done: !t
                                }
                            }
                        };
                        throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
                    }(t), i = o.next(); !i.done; i = o.next()) {
                    var a = i.value;
                    console.dir(this._exportInfo(a), {
                        depth: 3
                    })
                }
            } catch (t) {
                r = {
                    error: t
                }
            } finally {
                try {
                    i && !i.done && (n = o.return) && n.call(o)
                } finally {
                    if (r) throw r.error
                }
            }
            if (e) return e({
                code: re.SUCCESS
            })
        }, t
    }()), t("InMemorySpanExporter", function() {
        function t() {
            this._finishedSpans = [], this._stopped = !1
        }
        return t.prototype.export = function(t, e) {
            var r;
            if (this._stopped) return e({
                code: re.FAILED,
                error: new Error("Exporter has been stopped")
            });
            (r = this._finishedSpans).push.apply(r, function(t, e, r) {
                if (r || 2 === arguments.length)
                    for (var n, o = 0, i = e.length; o < i; o++) !n && o in e || (n || (n = Array.prototype.slice.call(e, 0, o)), n[o] = e[o]);
                return t.concat(n || Array.prototype.slice.call(e))
            }([], function(t, e) {
                var r = "function" == typeof Symbol && t[Symbol.iterator];
                if (!r) return t;
                var n, o, i = r.call(t),
                    a = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value)
                } catch (t) {
                    o = {
                        error: t
                    }
                } finally {
                    try {
                        n && !n.done && (r = i.return) && r.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return a
            }(t), !1)), setTimeout((function() {
                return e({
                    code: re.SUCCESS
                })
            }), 0)
        }, t.prototype.shutdown = function() {
            return this._stopped = !0, this._finishedSpans = [], this.forceFlush()
        }, t.prototype.forceFlush = function() {
            return Promise.resolve()
        }, t.prototype.reset = function() {
            this._finishedSpans = []
        }, t.prototype.getFinishedSpans = function() {
            return this._finishedSpans
        }, t
    }());
    var vr = function(t, e, r, n) {
            return new(r || (r = Promise))((function(o, i) {
                function a(t) {
                    try {
                        u(n.next(t))
                    } catch (t) {
                        i(t)
                    }
                }

                function s(t) {
                    try {
                        u(n.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }

                function u(t) {
                    var e;
                    t.done ? o(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                        t(e)
                    }))).then(a, s)
                }
                u((n = n.apply(t, e || [])).next())
            }))
        },
        gr = function(t, e) {
            var r, n, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0]) throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: s(0),
                throw: s(1),
                return: s(2)
            }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }), i;

            function s(i) {
                return function(s) {
                    return function(i) {
                        if (r) throw new TypeError("Generator is already executing.");
                        for (; a;) try {
                            if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                            switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return a.label++, {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++, n = i[1], i = [0];
                                    continue;
                                case 7:
                                    i = a.ops.pop(), a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        a.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && a.label < o[1]) {
                                        a.label = o[1], o = i;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2], a.ops.push(i);
                                        break
                                    }
                                    o[2] && a.ops.pop(), a.trys.pop();
                                    continue
                            }
                            i = e.call(t, a)
                        } catch (t) {
                            i = [6, t], n = 0
                        } finally {
                            r = o = 0
                        }
                        if (5 & i[0]) throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, s])
                }
            }
        };
    t("SimpleSpanProcessor", function() {
        function t(t) {
            this._exporter = t, this._shutdownOnce = new Fe(this._shutdown, this), this._unresolvedExports = new Set
        }
        return t.prototype.forceFlush = function() {
            return vr(this, void 0, void 0, (function() {
                return gr(this, (function(t) {
                    switch (t.label) {
                        case 0:
                            return [4, Promise.all(Array.from(this._unresolvedExports))];
                        case 1:
                            return t.sent(), this._exporter.forceFlush ? [4, this._exporter.forceFlush()] : [3, 3];
                        case 2:
                            t.sent(), t.label = 3;
                        case 3:
                            return [2]
                    }
                }))
            }))
        }, t.prototype.onStart = function(t, e) {}, t.prototype.onEnd = function(t) {
            var e, r, n = this;
            if (!this._shutdownOnce.isCalled && 0 != (t.spanContext().traceFlags & L.SAMPLED)) {
                var o = function() {
                    return ze._export(n._exporter, [t]).then((function(t) {
                        var e;
                        t.code !== re.SUCCESS && Ut(null !== (e = t.error) && void 0 !== e ? e : new Error("SimpleSpanProcessor: span export failed (status " + t + ")"))
                    })).catch((function(t) {
                        Ut(t)
                    }))
                };
                if (t.resource.asyncAttributesPending) {
                    var i = null === (r = (e = t.resource).waitForAsyncAttributes) || void 0 === r ? void 0 : r.call(e).then((function() {
                        return null != i && n._unresolvedExports.delete(i), o()
                    }), (function(t) {
                        return Ut(t)
                    }));
                    null != i && this._unresolvedExports.add(i)
                } else o()
            }
        }, t.prototype.shutdown = function() {
            return this._shutdownOnce.call()
        }, t.prototype._shutdown = function() {
            return this._exporter.shutdown()
        }, t
    }());
    e._RF.pop()
}