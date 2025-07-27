import * as e from "./cc.js";

function main() {
    e._RF.push({}, "f479cTdi6lI9YORs4Krbh3t", "otel-exporter-trace-otlp-http", void 0);
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
                u = +n[3];
            if (null != n[4]) return function(e) {
                return e === t
            };

            function s(t) {
                return r.add(t), !1
            }

            function c(t) {
                return e.add(t), !0
            }
            return function(t) {
                if (e.has(t)) return !0;
                if (r.has(t)) return !1;
                var n = t.match(o);
                if (!n) return s(t);
                var E = +n[1],
                    l = +n[2],
                    _ = +n[3];
                return null != n[4] || i !== E ? s(t) : 0 === i ? a === l && u <= _ ? c(t) : s(t) : a <= l ? c(t) : s(t)
            }
        }(n),
        a = n.split(".")[0],
        u = Symbol.for("opentelemetry.js.api." + a),
        s = r;

    function c(t) {
        var e, r, n = null === (e = s[u]) || void 0 === e ? void 0 : e.version;
        if (n && i(n)) return null === (r = s[u]) || void 0 === r ? void 0 : r[t]
    }
    var E, l = function() {
        function t(t) {
            this._namespace = t.namespace || "DiagComponentLogger"
        }
        return t.prototype.debug = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return _("debug", this._namespace, t)
        }, t.prototype.error = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return _("error", this._namespace, t)
        }, t.prototype.info = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return _("info", this._namespace, t)
        }, t.prototype.warn = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return _("warn", this._namespace, t)
        }, t.prototype.verbose = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return _("verbose", this._namespace, t)
        }, t
    }();

    function _(t, e, r) {
        var n = c("diag");
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
    }(E || (E = {}));
    var T = function(t, e) {
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
        f = function(t, e, r) {
            if (r || 2 === arguments.length)
                for (var n, o = 0, i = e.length; o < i; o++) !n && o in e || (n || (n = Array.prototype.slice.call(e, 0, o)), n[o] = e[o]);
            return t.concat(n || Array.prototype.slice.call(e))
        },
        O = function() {
            function t() {
                function t(t) {
                    return function() {
                        for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                        var n = c("diag");
                        if (n) return n[t].apply(n, f([], T(e), !1))
                    }
                }
                var e = this;
                e.setLogger = function(t, r) {
                    var o, i, a;
                    if (void 0 === r && (r = {
                            logLevel: E.INFO
                        }), t === e) {
                        var l = new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
                        return e.error(null !== (o = l.stack) && void 0 !== o ? o : l.message), !1
                    }
                    "number" == typeof r && (r = {
                        logLevel: r
                    });
                    var _ = c("diag"),
                        T = function(t, e) {
                            function r(r, n) {
                                var o = e[r];
                                return "function" == typeof o && t >= n ? o.bind(e) : function() {}
                            }
                            return t < E.NONE ? t = E.NONE : t > E.ALL && (t = E.ALL), e = e || {}, {
                                error: r("error", E.ERROR),
                                warn: r("warn", E.WARN),
                                info: r("info", E.INFO),
                                debug: r("debug", E.DEBUG),
                                verbose: r("verbose", E.VERBOSE)
                            }
                        }(null !== (i = r.logLevel) && void 0 !== i ? i : E.INFO, t);
                    if (_ && !r.suppressOverrideMessage) {
                        var f = null !== (a = (new Error).stack) && void 0 !== a ? a : "<failed to generate stacktrace>";
                        _.warn("Current logger will be overwritten from " + f), T.warn("Current logger will overwrite one already registered from " + f)
                    }
                    return function(t, e, r, o) {
                        var i;
                        void 0 === o && (o = !1);
                        var a = s[u] = null !== (i = s[u]) && void 0 !== i ? i : {
                            version: n
                        };
                        if (!o && a[t]) {
                            var c = new Error("@opentelemetry/api: Attempted duplicate registration of API: " + t);
                            return r.error(c.stack || c.message), !1
                        }
                        if (a.version !== n) return c = new Error("@opentelemetry/api: Registration of version v" + a.version + " for " + t + " does not match previously registered API v" + n), r.error(c.stack || c.message), !1;
                        return a[t] = e, r.debug("@opentelemetry/api: Registered a global for " + t + " v1.9.0."), !0
                    }("diag", T, e, !0)
                }, e.disable = function() {
                    ! function(t, e) {
                        e.debug("@opentelemetry/api: Unregistering a global for " + t + " v1.9.0.");
                        var r = s[u];
                        r && delete r[t]
                    }("diag", e)
                }, e.createComponentLogger = function(t) {
                    return new l(t)
                }, e.verbose = t("verbose"), e.debug = t("debug"), e.info = t("info"), e.warn = t("warn"), e.error = t("error")
            }
            return t.instance = function() {
                return this._instance || (this._instance = new t), this._instance
            }, t
        }(),
        p = Symbol("BaggageEntryMetadata"),
        d = O.instance();
    var R, L = O.instance();

    function v(t) {
        var e = t.split(";");
        if (!(e.length <= 0)) {
            var r = e.shift();
            if (r) {
                var n = r.indexOf("=");
                if (!(n <= 0)) {
                    var o, i, a = decodeURIComponent(r.substring(0, n).trim()),
                        u = decodeURIComponent(r.substring(n + 1).trim());
                    return e.length > 0 && ("string" != typeof(i = e.join(";")) && (d.error("Cannot create baggage metadata from unknown type: " + typeof i), i = ""), o = {
                        __TYPE__: p,
                        toString: function() {
                            return i
                        }
                    }), {
                        key: a,
                        value: u,
                        metadata: o
                    }
                }
            }
        }
    }! function(t) {
        t.AlwaysOff = "always_off", t.AlwaysOn = "always_on", t.ParentBasedAlwaysOff = "parentbased_always_off", t.ParentBasedAlwaysOn = "parentbased_always_on", t.ParentBasedTraceIdRatio = "parentbased_traceidratio", t.TraceIdRatio = "traceidratio"
    }(R || (R = {}));
    var h = ["OTEL_SDK_DISABLED"];

    function y(t) {
        return h.indexOf(t) > -1
    }
    var P = ["OTEL_BSP_EXPORT_TIMEOUT", "OTEL_BSP_MAX_EXPORT_BATCH_SIZE", "OTEL_BSP_MAX_QUEUE_SIZE", "OTEL_BSP_SCHEDULE_DELAY", "OTEL_BLRP_EXPORT_TIMEOUT", "OTEL_BLRP_MAX_EXPORT_BATCH_SIZE", "OTEL_BLRP_MAX_QUEUE_SIZE", "OTEL_BLRP_SCHEDULE_DELAY", "OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT", "OTEL_ATTRIBUTE_COUNT_LIMIT", "OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT", "OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT", "OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT", "OTEL_LOGRECORD_ATTRIBUTE_COUNT_LIMIT", "OTEL_SPAN_EVENT_COUNT_LIMIT", "OTEL_SPAN_LINK_COUNT_LIMIT", "OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT", "OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT", "OTEL_EXPORTER_OTLP_TIMEOUT", "OTEL_EXPORTER_OTLP_TRACES_TIMEOUT", "OTEL_EXPORTER_OTLP_METRICS_TIMEOUT", "OTEL_EXPORTER_OTLP_LOGS_TIMEOUT", "OTEL_EXPORTER_JAEGER_AGENT_PORT"];

    function I(t) {
        return P.indexOf(t) > -1
    }
    var S = ["OTEL_NO_PATCH_MODULES", "OTEL_PROPAGATORS"];

    function b(t) {
        return S.indexOf(t) > -1
    }
    var m = 1 / 0,
        g = {
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
            OTEL_LOG_LEVEL: E.INFO,
            OTEL_NO_PATCH_MODULES: [],
            OTEL_PROPAGATORS: ["tracecontext", "baggage"],
            OTEL_RESOURCE_ATTRIBUTES: "",
            OTEL_SERVICE_NAME: "",
            OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT: m,
            OTEL_ATTRIBUTE_COUNT_LIMIT: 128,
            OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT: m,
            OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT: 128,
            OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT: m,
            OTEL_LOGRECORD_ATTRIBUTE_COUNT_LIMIT: 128,
            OTEL_SPAN_EVENT_COUNT_LIMIT: 128,
            OTEL_SPAN_LINK_COUNT_LIMIT: 128,
            OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT: 128,
            OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT: 128,
            OTEL_TRACES_EXPORTER: "",
            OTEL_TRACES_SAMPLER: R.ParentBasedAlwaysOn,
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

    function A(t, e, r) {
        if (void 0 !== r[t]) {
            var n = String(r[t]);
            e[t] = "true" === n.toLowerCase()
        }
    }

    function C(t, e, r, n, o) {
        if (void 0 === n && (n = -1 / 0), void 0 === o && (o = 1 / 0), void 0 !== r[t]) {
            var i = Number(r[t]);
            isNaN(i) || (e[t] = i < n ? n : i > o ? o : i)
        }
    }

    function w(t, e, r, n) {
        void 0 === n && (n = ",");
        var o = r[t];
        "string" == typeof o && (e[t] = o.split(n).map((function(t) {
            return t.trim()
        })))
    }
    var N = {
        ALL: E.ALL,
        VERBOSE: E.VERBOSE,
        DEBUG: E.DEBUG,
        INFO: E.INFO,
        WARN: E.WARN,
        ERROR: E.ERROR,
        NONE: E.NONE
    };

    function U(t, e, r) {
        var n = r[t];
        if ("string" == typeof n) {
            var o = N[n.toUpperCase()];
            null != o && (e[t] = o)
        }
    }
    var M = "object" == typeof globalThis ? globalThis : "object" == typeof self ? self : "object" == typeof window ? window : "object" == typeof global ? global : {};

    function X() {
        var t = function(t) {
            var e = {};
            for (var r in g) {
                var n = r;
                switch (n) {
                    case "OTEL_LOG_LEVEL":
                        U(n, e, t);
                        break;
                    default:
                        if (y(n)) A(n, e, t);
                        else if (I(n)) C(n, e, t);
                        else if (b(n)) w(n, e, t);
                        else {
                            var o = t[n];
                            null != o && (e[n] = String(o))
                        }
                }
            }
            return e
        }(M);
        return Object.assign({}, g, t)
    }

    function B(t) {
        return t >= 48 && t <= 57 ? t - 48 : t >= 97 && t <= 102 ? t - 87 : t - 55
    }

    function x(t) {
        for (var e = new Uint8Array(t.length / 2), r = 0, n = 0; n < t.length; n += 2) {
            var o = B(t.charCodeAt(n)),
                i = B(t.charCodeAt(n + 1));
            e[r++] = o << 4 | i
        }
        return e
    }
    var D, G = Math.pow(10, 9);
    ! function(t) {
        t[t.SUCCESS = 0] = "SUCCESS", t[t.FAILED = 1] = "FAILED"
    }(D || (D = {}));
    var H = function() {
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
        j = function(t, e) {
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
        k = function(t, e, r) {
            if (r || 2 === arguments.length)
                for (var n, o = 0, i = e.length; o < i; o++) !n && o in e || (n || (n = Array.prototype.slice.call(e, 0, o)), n[o] = e[o]);
            return t.concat(n || Array.prototype.slice.call(e))
        },
        V = function() {
            function t(t, e) {
                this._callback = t, this._that = e, this._isCalled = !1, this._deferred = new H
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
                        Promise.resolve((t = this._callback).call.apply(t, k([this._that], j(r), !1))).then((function(t) {
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
        }(),
        F = {
            getKeyPairs: function(t) {
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
            },
            serializeKeyPairs: function(t) {
                return t.reduce((function(t, e) {
                    var r = t + ("" !== t ? "," : "") + e;
                    return r.length > 8192 ? t : r
                }), "")
            },
            parseKeyPairsIntoRecord: function(t) {
                return "string" != typeof t || 0 === t.length ? {} : t.split(",").map((function(t) {
                    return v(t)
                })).filter((function(t) {
                    return void 0 !== t && t.value.length > 0
                })).reduce((function(t, e) {
                    return t[e.key] = e.value, t
                }), {})
            },
            parsePairKeyValue: v
        },
        K = 1e4;

    function Y(t) {
        void 0 === t && (t = {});
        var e = {};
        return Object.entries(t).forEach((function(t) {
            var r = function(t, e) {
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
                n = r[0],
                o = r[1];
            void 0 !== o ? e[n] = String(o) : L.warn('Header "' + n + '" has invalid value (' + o + ") and will be ignored")
        })), e
    }

    function z(t) {
        return "number" == typeof t ? t <= 0 ? Z(t, 1e4) : t : (r = Number(null !== (e = X().OTEL_EXPORTER_OTLP_TRACES_TIMEOUT) && void 0 !== e ? e : X().OTEL_EXPORTER_OTLP_TIMEOUT)) <= 0 ? Z(r, K) : r;
        var e, r
    }

    function Z(t, e) {
        return L.warn("Timeout must be greater than 0", t), e
    }

    function q(t) {
        if (null == t) return -1;
        var e = Number.parseInt(t, 10);
        if (Number.isInteger(e)) return e > 0 ? 1e3 * e : -1;
        var r = new Date(t).getTime() - Date.now();
        return r >= 0 ? r : 0
    }
    var J, W = function() {
            function t(t) {
                void 0 === t && (t = {}), this._sendingPromises = [], this.url = this.getDefaultUrl(t), "string" == typeof t.hostname && (this.hostname = t.hostname), this.shutdown = this.shutdown.bind(this), this._shutdownOnce = new V(this._shutdown, this), this._concurrencyLimit = "number" == typeof t.concurrencyLimit ? t.concurrencyLimit : 30, this.timeoutMillis = z(t.timeoutMillis), this.onInit(t)
            }
            return t.prototype.export = function(t, e) {
                this._shutdownOnce.isCalled ? e({
                    code: D.FAILED,
                    error: new Error("Exporter has been shutdown")
                }) : this._sendingPromises.length >= this._concurrencyLimit ? e({
                    code: D.FAILED,
                    error: new Error("Concurrent export limit reached")
                }) : this._export(t).then((function() {
                    e({
                        code: D.SUCCESS
                    }, t)
                })).catch((function(t) {
                    e({
                        code: D.FAILED,
                        error: t
                    })
                }))
            }, t.prototype._export = function(t) {
                var e = this;
                return new Promise((function(r, n) {
                    try {
                        L.debug("items to be sent", t), e.send(t, r, n)
                    } catch (t) {
                        n(t)
                    }
                }))
            }, t.prototype.shutdown = function() {
                return this._shutdownOnce.call()
            }, t.prototype.forceFlush = function() {
                return Promise.all(this._sendingPromises).then((function() {}))
            }, t.prototype._shutdown = function() {
                return L.debug("shutdown started"), this.onShutdown(), this.forceFlush()
            }, t
        }(),
        Q = (J = function(t, e) {
            return (J = Object.setPrototypeOf || {
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
            J(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        }),
        $ = function(t) {
            function e(e, r, n) {
                var o = t.call(this, e) || this;
                return o.name = "OTLPExporterError", o.data = n, o.code = r, o
            }
            return Q(e, t), e
        }(Error),
        tt = function() {
            function t(t) {
                this._parameters = t
            }
            return t.prototype.send = function(t, e) {
                var r = this;
                return new Promise((function(n) {
                    var o = new XMLHttpRequest;
                    o.timeout = e, o.open("POST", r._parameters.url), Object.entries(r._parameters.headers).forEach((function(t) {
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
                            n = e[1];
                        o.setRequestHeader(r, n)
                    })), o.ontimeout = function(t) {
                        n({
                            status: "failure",
                            error: new Error("XHR request timed out")
                        })
                    }, o.onreadystatechange = function() {
                        var t;
                        o.status >= 200 && o.status <= 299 ? (L.debug("XHR success"), n({
                            status: "success"
                        })) : o.status && (t = o.status, [429, 502, 503, 504].includes(t)) ? n({
                            status: "retryable",
                            retryInMillis: q(o.getResponseHeader("Retry-After"))
                        }) : 0 !== o.status && n({
                            status: "failure",
                            error: new Error("XHR request failed with non-retryable status")
                        })
                    }, o.onabort = function() {
                        n({
                            status: "failure",
                            error: new Error("XHR request aborted")
                        })
                    }, o.onerror = function() {
                        n({
                            status: "failure",
                            error: new Error("XHR request errored")
                        })
                    }, o.send(t)
                }))
            }, t.prototype.shutdown = function() {}, t
        }();
    var et = function() {
        function t(t) {
            this._params = t
        }
        return t.prototype.send = function(t) {
            var e = this;
            return new Promise((function(r) {
                navigator.sendBeacon(e._params.url, new Blob([t], {
                    type: e._params.blobType
                })) ? (L.debug("SendBeacon success"), r({
                    status: "success"
                })) : r({
                    status: "failure",
                    error: new Error("SendBeacon failed")
                })
            }))
        }, t.prototype.shutdown = function() {}, t
    }();
    var rt = function(t, e, r, n) {
            return new(r || (r = Promise))((function(o, i) {
                function a(t) {
                    try {
                        s(n.next(t))
                    } catch (t) {
                        i(t)
                    }
                }

                function u(t) {
                    try {
                        s(n.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }

                function s(t) {
                    var e;
                    t.done ? o(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                        t(e)
                    }))).then(a, u)
                }
                s((n = n.apply(t, e || [])).next())
            }))
        },
        nt = function(t, e) {
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
                next: u(0),
                throw: u(1),
                return: u(2)
            }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }), i;

            function u(i) {
                return function(u) {
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
                    }([i, u])
                }
            }
        };
    var ot = function() {
        function t(t) {
            this._transport = t
        }
        return t.prototype.retry = function(t, e, r) {
            var n = this;
            return new Promise((function(o, i) {
                setTimeout((function() {
                    n._transport.send(t, e).then(o, i)
                }), r)
            }))
        }, t.prototype.send = function(t, e) {
            var r;
            return rt(this, void 0, void 0, (function() {
                var n, o, i, a, u, s, c;
                return nt(this, (function(E) {
                    switch (E.label) {
                        case 0:
                            return n = Date.now() + e, [4, this._transport.send(t, e)];
                        case 1:
                            o = E.sent(), i = 5, a = 1e3, E.label = 2;
                        case 2:
                            return "retryable" === o.status && i > 0 ? (i--, u = Math.max(Math.min(a, 5e3) + (.4 * Math.random() - .2), 0), a *= 1.5, s = null !== (r = o.retryInMillis) && void 0 !== r ? r : u, c = n - Date.now(), s > c ? [2, o] : [4, this.retry(t, c, s)]) : [3, 4];
                        case 3:
                            return o = E.sent(), [3, 2];
                        case 4:
                            return [2, o]
                    }
                }))
            }))
        }, t.prototype.shutdown = function() {
            return this._transport.shutdown()
        }, t
    }();
    var it = function() {
            var t = function(e, r) {
                return (t = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
                    })(e, r)
            };
            return function(e, r) {
                if ("function" != typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");

                function n() {
                    this.constructor = e
                }
                t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
            }
        }(),
        at = function(t) {
            function e(e, r, n) {
                void 0 === e && (e = {});
                var o = t.call(this, e) || this;
                o._serializer = r;
                var i, a, u = !!e.headers || "function" != typeof navigator.sendBeacon;
                return o._transport = u ? (i = {
                    transport: (a = {
                        headers: Object.assign({}, Y(e.headers), F.parseKeyPairsIntoRecord(X().OTEL_EXPORTER_OTLP_HEADERS), {
                            "Content-Type": n
                        }),
                        url: o.url
                    }, new tt(a))
                }, new ot(i.transport)) : function(t) {
                    return new et(t)
                }({
                    url: o.url,
                    blobType: n
                }), o
            }
            return it(e, t), e.prototype.onInit = function() {}, e.prototype.onShutdown = function() {}, e.prototype.send = function(t, e, r) {
                var n = this;
                if (this._shutdownOnce.isCalled) L.debug("Shutdown already started. Cannot send objects");
                else {
                    var o = this._serializer.serializeRequest(t);
                    if (null != o) {
                        var i = this._transport.send(o, this.timeoutMillis).then((function(t) {
                            "success" === t.status ? e() : "failure" === t.status && t.error ? r(t.error) : "retryable" === t.status ? r(new $("Export failed with retryable status")) : r(new $("Export failed with unknown error"))
                        }), r);
                        this._sendingPromises.push(i);
                        var a = function() {
                            var t = n._sendingPromises.indexOf(i);
                            n._sendingPromises.splice(t, 1)
                        };
                        i.then(a, a)
                    } else r(new Error("Could not serialize message"))
                }
            }, e
        }(W);

    function ut(t) {
        var e = BigInt(1e9);
        return BigInt(t[0]) * e + BigInt(t[1])
    }

    function st(t) {
        var e, r = ut(t);
        return e = r, {
            low: Number(BigInt.asUintN(32, e)),
            high: Number(BigInt.asUintN(32, e >> BigInt(32)))
        }
    }
    var ct = "undefined" != typeof BigInt ? function(t) {
        return ut(t).toString()
    } : function(t) {
        return t[0] * G + t[1]
    };

    function Et(t) {
        return t
    }

    function lt(t) {
        if (void 0 !== t) return x(t)
    }
    var _t = {
        encodeHrTime: st,
        encodeSpanContext: x,
        encodeOptionalSpanContext: lt
    };

    function Tt(t) {
        return Object.keys(t).map((function(e) {
            return ft(e, t[e])
        }))
    }

    function ft(t, e) {
        return {
            key: t,
            value: Ot(e)
        }
    }

    function Ot(t) {
        var e = typeof t;
        return "string" === e ? {
            stringValue: t
        } : "number" === e ? Number.isInteger(t) ? {
            intValue: t
        } : {
            doubleValue: t
        } : "boolean" === e ? {
            boolValue: t
        } : t instanceof Uint8Array ? {
            bytesValue: t
        } : Array.isArray(t) ? {
            arrayValue: {
                values: t.map(Ot)
            }
        } : "object" === e && null != t ? {
            kvlistValue: {
                values: Object.entries(t).map((function(t) {
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
                    return ft(e[0], e[1])
                }))
            }
        } : {}
    }

    function pt(t, e) {
        var r, n = t.spanContext(),
            o = t.status;
        return {
            traceId: e.encodeSpanContext(n.traceId),
            spanId: e.encodeSpanContext(n.spanId),
            parentSpanId: e.encodeOptionalSpanContext(t.parentSpanId),
            traceState: null === (r = n.traceState) || void 0 === r ? void 0 : r.serialize(),
            name: t.name,
            kind: null == t.kind ? 0 : t.kind + 1,
            startTimeUnixNano: e.encodeHrTime(t.startTime),
            endTimeUnixNano: e.encodeHrTime(t.endTime),
            attributes: Tt(t.attributes),
            droppedAttributesCount: t.droppedAttributesCount,
            events: t.events.map((function(t) {
                return function(t, e) {
                    return {
                        attributes: t.attributes ? Tt(t.attributes) : [],
                        name: t.name,
                        timeUnixNano: e.encodeHrTime(t.time),
                        droppedAttributesCount: t.droppedAttributesCount || 0
                    }
                }(t, e)
            })),
            droppedEventsCount: t.droppedEventsCount,
            status: {
                code: o.code,
                message: o.message
            },
            links: t.links.map((function(t) {
                return function(t, e) {
                    var r;
                    return {
                        attributes: t.attributes ? Tt(t.attributes) : [],
                        spanId: e.encodeSpanContext(t.context.spanId),
                        traceId: e.encodeSpanContext(t.context.traceId),
                        traceState: null === (r = t.context.traceState) || void 0 === r ? void 0 : r.serialize(),
                        droppedAttributesCount: t.droppedAttributesCount || 0
                    }
                }(t, e)
            })),
            droppedLinksCount: t.droppedLinksCount
        }
    }

    function dt(t) {
        return {
            attributes: Tt(t.attributes),
            droppedAttributesCount: 0
        }
    }
    var Rt = function(t, e) {
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

    function Lt(t, e) {
        return {
            resourceSpans: ht(t, function(t) {
                var e, r;
                if (void 0 === t) return _t;
                var n = null === (e = t.useLongBits) || void 0 === e || e,
                    o = null !== (r = t.useHex) && void 0 !== r && r;
                return {
                    encodeHrTime: n ? st : ct,
                    encodeSpanContext: o ? Et : x,
                    encodeOptionalSpanContext: o ? Et : lt
                }
            }(e))
        }
    }

    function vt(t) {
        var e, r, n = new Map;
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
                var a = i.value,
                    u = n.get(a.resource);
                u || (u = new Map, n.set(a.resource, u));
                var s = a.instrumentationLibrary.name + "@" + (a.instrumentationLibrary.version || "") + ":" + (a.instrumentationLibrary.schemaUrl || ""),
                    c = u.get(s);
                c || (c = [], u.set(s, c)), c.push(a)
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

    function ht(t, e) {
        for (var r, n = [], o = vt(t).entries(), i = o.next(); !i.done;) {
            for (var a = Rt(i.value, 2), u = a[0], s = [], c = a[1].values(), E = c.next(); !E.done;) {
                var l = E.value;
                if (l.length > 0) {
                    var _ = l.map((function(t) {
                        return pt(t, e)
                    }));
                    s.push({
                        scope: (r = l[0].instrumentationLibrary, {
                            name: r.name,
                            version: r.version
                        }),
                        spans: _,
                        schemaUrl: l[0].instrumentationLibrary.schemaUrl
                    })
                }
                E = c.next()
            }
            var T = {
                resource: dt(u),
                scopeSpans: s,
                schemaUrl: void 0
            };
            n.push(T), i = o.next()
        }
        return n
    }
    var yt = {
            serializeRequest: function(t) {
                var e = Lt(t, {
                    useHex: !0,
                    useLongBits: !1
                });
                return (new TextEncoder).encode(JSON.stringify(e))
            },
            deserializeResponse: function(t) {
                var e = new TextDecoder;
                return JSON.parse(e.decode(t))
            }
        },
        Pt = function() {
            var t = function(e, r) {
                return (t = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
                    })(e, r)
            };
            return function(e, r) {
                if ("function" != typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");

                function n() {
                    this.constructor = e
                }
                t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
            }
        }();
    t("OTLPTraceExporter", function(t) {
        function e(e) {
            return void 0 === e && (e = {}), t.call(this, e, yt, "application/json") || this
        }
        return Pt(e, t), e.prototype.getDefaultUrl = function(t) {
            return "string" == typeof t.url ? t.url : "http://localhost:4318/v1/traces"
        }, e
    }(at));
    e._RF.pop()
}