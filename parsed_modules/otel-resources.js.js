import * as r from "./cjs-loader.mjs.js";

function main() {
    let n;
    e("default", void 0);
    const o = e("__cjsMetaURL", t.meta.url);
    r.define(o, (function(t, r, o, i, E) {
        var a = "object" == typeof globalThis ? globalThis : "object" == typeof self ? self : "object" == typeof window ? window : "object" == typeof global ? global : {},
            u = "1.9.0",
            s = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
        var _ = function(e) {
                var t = new Set([e]),
                    r = new Set,
                    n = e.match(s);
                if (!n) return function() {
                    return !1
                };
                var o = +n[1],
                    i = +n[2],
                    E = +n[3];
                if (null != n[4]) return function(t) {
                    return t === e
                };

                function a(e) {
                    return r.add(e), !1
                }

                function u(e) {
                    return t.add(e), !0
                }
                return function(e) {
                    if (t.has(e)) return !0;
                    if (r.has(e)) return !1;
                    var n = e.match(s);
                    if (!n) return a(e);
                    var _ = +n[1],
                        c = +n[2],
                        T = +n[3];
                    return null != n[4] || o !== _ ? a(e) : 0 === o ? i === c && E <= T ? u(e) : a(e) : i <= c ? u(e) : a(e)
                }
            }(u),
            c = u.split(".")[0],
            T = Symbol.for("opentelemetry.js.api." + c),
            l = a;

        function O(e) {
            var t, r, n = null === (t = l[T]) || void 0 === t ? void 0 : t.version;
            if (n && _(n)) return null === (r = l[T]) || void 0 === r ? void 0 : r[e]
        }
        var f, R = function() {
            function e(e) {
                this._namespace = e.namespace || "DiagComponentLogger"
            }
            return e.prototype.debug = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return L("debug", this._namespace, e)
            }, e.prototype.error = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return L("error", this._namespace, e)
            }, e.prototype.info = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return L("info", this._namespace, e)
            }, e.prototype.warn = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return L("warn", this._namespace, e)
            }, e.prototype.verbose = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return L("verbose", this._namespace, e)
            }, e
        }();

        function L(e, t, r) {
            var n = O("diag");
            if (n) return r.unshift(t), n[e].apply(n, function(e, t, r) {
                if (r || 2 === arguments.length)
                    for (var n, o = 0, i = t.length; o < i; o++) !n && o in t || (n || (n = Array.prototype.slice.call(t, 0, o)), n[o] = t[o]);
                return e.concat(n || Array.prototype.slice.call(t))
            }([], function(e, t) {
                var r = "function" == typeof Symbol && e[Symbol.iterator];
                if (!r) return e;
                var n, o, i = r.call(e),
                    E = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(n = i.next()).done;) E.push(n.value)
                } catch (e) {
                    o = {
                        error: e
                    }
                } finally {
                    try {
                        n && !n.done && (r = i.return) && r.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return E
            }(r), !1))
        }! function(e) {
            e[e.NONE = 0] = "NONE", e[e.ERROR = 30] = "ERROR", e[e.WARN = 50] = "WARN", e[e.INFO = 60] = "INFO", e[e.DEBUG = 70] = "DEBUG", e[e.VERBOSE = 80] = "VERBOSE", e[e.ALL = 9999] = "ALL"
        }(f || (f = {}));
        var p, d = function(e, t) {
                var r = "function" == typeof Symbol && e[Symbol.iterator];
                if (!r) return e;
                var n, o, i = r.call(e),
                    E = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(n = i.next()).done;) E.push(n.value)
                } catch (e) {
                    o = {
                        error: e
                    }
                } finally {
                    try {
                        n && !n.done && (r = i.return) && r.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return E
            },
            v = function(e, t, r) {
                if (r || 2 === arguments.length)
                    for (var n, o = 0, i = t.length; o < i; o++) !n && o in t || (n || (n = Array.prototype.slice.call(t, 0, o)), n[o] = t[o]);
                return e.concat(n || Array.prototype.slice.call(t))
            },
            A = function() {
                function e() {
                    function e(e) {
                        return function() {
                            for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                            var n = O("diag");
                            if (n) return n[e].apply(n, v([], d(t), !1))
                        }
                    }
                    var t = this;
                    t.setLogger = function(e, r) {
                        var n, o, i;
                        if (void 0 === r && (r = {
                                logLevel: f.INFO
                            }), e === t) {
                            var E = new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
                            return t.error(null !== (n = E.stack) && void 0 !== n ? n : E.message), !1
                        }
                        "number" == typeof r && (r = {
                            logLevel: r
                        });
                        var a = O("diag"),
                            s = function(e, t) {
                                function r(r, n) {
                                    var o = t[r];
                                    return "function" == typeof o && e >= n ? o.bind(t) : function() {}
                                }
                                return e < f.NONE ? e = f.NONE : e > f.ALL && (e = f.ALL), t = t || {}, {
                                    error: r("error", f.ERROR),
                                    warn: r("warn", f.WARN),
                                    info: r("info", f.INFO),
                                    debug: r("debug", f.DEBUG),
                                    verbose: r("verbose", f.VERBOSE)
                                }
                            }(null !== (o = r.logLevel) && void 0 !== o ? o : f.INFO, e);
                        if (a && !r.suppressOverrideMessage) {
                            var _ = null !== (i = (new Error).stack) && void 0 !== i ? i : "<failed to generate stacktrace>";
                            a.warn("Current logger will be overwritten from " + _), s.warn("Current logger will overwrite one already registered from " + _)
                        }
                        return function(e, t, r, n) {
                            var o;
                            void 0 === n && (n = !1);
                            var i = l[T] = null !== (o = l[T]) && void 0 !== o ? o : {
                                version: u
                            };
                            if (!n && i[e]) {
                                var E = new Error("@opentelemetry/api: Attempted duplicate registration of API: " + e);
                                return r.error(E.stack || E.message), !1
                            }
                            if (i.version !== u) return E = new Error("@opentelemetry/api: Registration of version v" + i.version + " for " + e + " does not match previously registered API v" + u), r.error(E.stack || E.message), !1;
                            return i[e] = t, r.debug("@opentelemetry/api: Registered a global for " + e + " v1.9.0."), !0
                        }("diag", s, t, !0)
                    }, t.disable = function() {
                        ! function(e, t) {
                            t.debug("@opentelemetry/api: Unregistering a global for " + e + " v1.9.0.");
                            var r = l[T];
                            r && delete r[e]
                        }("diag", t)
                    }, t.createComponentLogger = function(e) {
                        return new R(e)
                    }, t.verbose = e("verbose"), t.debug = e("debug"), t.info = e("info"), t.warn = e("warn"), t.error = e("error")
                }
                return e.instance = function() {
                    return this._instance || (this._instance = new e), this._instance
                }, e
            }().instance();
        ! function(e) {
            e.AlwaysOff = "always_off", e.AlwaysOn = "always_on", e.ParentBasedAlwaysOff = "parentbased_always_off", e.ParentBasedAlwaysOn = "parentbased_always_on", e.ParentBasedTraceIdRatio = "parentbased_traceidratio", e.TraceIdRatio = "traceidratio"
        }(p || (p = {}));
        var y = ["OTEL_SDK_DISABLED"];

        function P(e) {
            return y.indexOf(e) > -1
        }
        var I = ["OTEL_BSP_EXPORT_TIMEOUT", "OTEL_BSP_MAX_EXPORT_BATCH_SIZE", "OTEL_BSP_MAX_QUEUE_SIZE", "OTEL_BSP_SCHEDULE_DELAY", "OTEL_BLRP_EXPORT_TIMEOUT", "OTEL_BLRP_MAX_EXPORT_BATCH_SIZE", "OTEL_BLRP_MAX_QUEUE_SIZE", "OTEL_BLRP_SCHEDULE_DELAY", "OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT", "OTEL_ATTRIBUTE_COUNT_LIMIT", "OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT", "OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT", "OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT", "OTEL_LOGRECORD_ATTRIBUTE_COUNT_LIMIT", "OTEL_SPAN_EVENT_COUNT_LIMIT", "OTEL_SPAN_LINK_COUNT_LIMIT", "OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT", "OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT", "OTEL_EXPORTER_OTLP_TIMEOUT", "OTEL_EXPORTER_OTLP_TRACES_TIMEOUT", "OTEL_EXPORTER_OTLP_METRICS_TIMEOUT", "OTEL_EXPORTER_OTLP_LOGS_TIMEOUT", "OTEL_EXPORTER_JAEGER_AGENT_PORT"];

        function S(e) {
            return I.indexOf(e) > -1
        }
        var b = ["OTEL_NO_PATCH_MODULES", "OTEL_PROPAGATORS"];

        function h(e) {
            return b.indexOf(e) > -1
        }
        var g = 1 / 0,
            N = {
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
                OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT: g,
                OTEL_ATTRIBUTE_COUNT_LIMIT: 128,
                OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT: g,
                OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT: 128,
                OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT: g,
                OTEL_LOGRECORD_ATTRIBUTE_COUNT_LIMIT: 128,
                OTEL_SPAN_EVENT_COUNT_LIMIT: 128,
                OTEL_SPAN_LINK_COUNT_LIMIT: 128,
                OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT: 128,
                OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT: 128,
                OTEL_TRACES_EXPORTER: "",
                OTEL_TRACES_SAMPLER: p.ParentBasedAlwaysOn,
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

        function m(e, t, r) {
            if (void 0 !== r[e]) {
                var n = String(r[e]);
                t[e] = "true" === n.toLowerCase()
            }
        }

        function C(e, t, r, n, o) {
            if (void 0 === n && (n = -1 / 0), void 0 === o && (o = 1 / 0), void 0 !== r[e]) {
                var i = Number(r[e]);
                isNaN(i) || (t[e] = i < n ? n : i > o ? o : i)
            }
        }

        function w(e, t, r, n) {
            void 0 === n && (n = ",");
            var o = r[e];
            "string" == typeof o && (t[e] = o.split(n).map((function(e) {
                return e.trim()
            })))
        }
        var U = {
            ALL: f.ALL,
            VERBOSE: f.VERBOSE,
            DEBUG: f.DEBUG,
            INFO: f.INFO,
            WARN: f.WARN,
            ERROR: f.ERROR,
            NONE: f.NONE
        };

        function M(e, t, r) {
            var n = r[e];
            if ("string" == typeof n) {
                var o = U[n.toUpperCase()];
                null != o && (t[e] = o)
            }
        }
        var X = "object" == typeof globalThis ? globalThis : "object" == typeof self ? self : "object" == typeof window ? window : "object" == typeof global ? global : {};

        function D() {
            var e = function(e) {
                var t = {};
                for (var r in N) {
                    var n = r;
                    switch (n) {
                        case "OTEL_LOG_LEVEL":
                            M(n, t, e);
                            break;
                        default:
                            if (P(n)) m(n, t, e);
                            else if (S(n)) C(n, t, e);
                            else if (h(n)) w(n, t, e);
                            else {
                                var o = e[n];
                                null != o && (t[n] = String(o))
                            }
                    }
                }
                return t
            }(X);
            return Object.assign({}, N, e)
        }
        var B, G = ((B = {})["telemetry.sdk.name"] = "opentelemetry", B["process.runtime.name"] = "browser", B["telemetry.sdk.language"] = "webjs", B["telemetry.sdk.version"] = "1.26.0", B);

        function x() {
            return "unknown_service"
        }
        var V = function() {
                return (V = Object.assign || function(e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }).apply(this, arguments)
            },
            k = function(e, t, r, n) {
                return new(r || (r = Promise))((function(o, i) {
                    function E(e) {
                        try {
                            u(n.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function a(e) {
                        try {
                            u(n.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function u(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                            e(t)
                        }))).then(E, a)
                    }
                    u((n = n.apply(e, t || [])).next())
                }))
            },
            H = function(e, t) {
                var r, n, o, i, E = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; E;) try {
                                if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return E.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        E.label++, n = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = E.ops.pop(), E.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = E.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                            E = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            E.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && E.label < o[1]) {
                                            E.label = o[1], o = i;
                                            break
                                        }
                                        if (o && E.label < o[2]) {
                                            E.label = o[2], E.ops.push(i);
                                            break
                                        }
                                        o[2] && E.ops.pop(), E.trys.pop();
                                        continue
                                }
                                i = t.call(e, E)
                            } catch (e) {
                                i = [6, e], n = 0
                            } finally {
                                r = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, a])
                    }
                }
            },
            j = function() {
                function e(e, t) {
                    var r, n = this;
                    this._attributes = e, this.asyncAttributesPending = null != t, this._syncAttributes = null !== (r = this._attributes) && void 0 !== r ? r : {}, this._asyncAttributesPromise = null == t ? void 0 : t.then((function(e) {
                        return n._attributes = Object.assign({}, n._attributes, e), n.asyncAttributesPending = !1, e
                    }), (function(e) {
                        return A.debug("a resource's async attributes promise rejected: %s", e), n.asyncAttributesPending = !1, {}
                    }))
                }
                return e.empty = function() {
                    return e.EMPTY
                }, e.default = function() {
                    var t;
                    return new e(((t = {})["service.name"] = "unknown_service", t["telemetry.sdk.language"] = G["telemetry.sdk.language"], t["telemetry.sdk.name"] = G["telemetry.sdk.name"], t["telemetry.sdk.version"] = G["telemetry.sdk.version"], t))
                }, Object.defineProperty(e.prototype, "attributes", {
                    get: function() {
                        var e;
                        return this.asyncAttributesPending && A.error("Accessing resource attributes before async attributes settled"), null !== (e = this._attributes) && void 0 !== e ? e : {}
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.prototype.waitForAsyncAttributes = function() {
                    return k(this, void 0, void 0, (function() {
                        return H(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    return this.asyncAttributesPending ? [4, this._asyncAttributesPromise] : [3, 2];
                                case 1:
                                    e.sent(), e.label = 2;
                                case 2:
                                    return [2]
                            }
                        }))
                    }))
                }, e.prototype.merge = function(t) {
                    var r, n = this;
                    if (!t) return this;
                    var o = V(V({}, this._syncAttributes), null !== (r = t._syncAttributes) && void 0 !== r ? r : t.attributes);
                    return this._asyncAttributesPromise || t._asyncAttributesPromise ? new e(o, Promise.all([this._asyncAttributesPromise, t._asyncAttributesPromise]).then((function(e) {
                        var r, o = function(e, t) {
                                var r = "function" == typeof Symbol && e[Symbol.iterator];
                                if (!r) return e;
                                var n, o, i = r.call(e),
                                    E = [];
                                try {
                                    for (;
                                        (void 0 === t || t-- > 0) && !(n = i.next()).done;) E.push(n.value)
                                } catch (e) {
                                    o = {
                                        error: e
                                    }
                                } finally {
                                    try {
                                        n && !n.done && (r = i.return) && r.call(i)
                                    } finally {
                                        if (o) throw o.error
                                    }
                                }
                                return E
                            }(e, 2),
                            i = o[0],
                            E = o[1];
                        return V(V(V(V({}, n._syncAttributes), i), null !== (r = t._syncAttributes) && void 0 !== r ? r : t.attributes), E)
                    }))) : new e(o)
                }, e.EMPTY = new e({}), e
            }(),
            F = new(function() {
                function e() {}
                return e.prototype.detect = function() {
                    return new j({})
                }, e
            }()),
            K = new(function() {
                function e() {}
                return e.prototype.detect = function() {
                    return Promise.resolve(F.detect())
                }, e
            }()),
            Y = K,
            Z = F,
            J = K,
            W = F,
            Q = K,
            $ = K,
            q = F,
            z = function() {
                return (z = Object.assign || function(e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }).apply(this, arguments)
            },
            ee = new(function() {
                function e() {}
                return e.prototype.detect = function(e) {
                    var t, r, n, o;
                    if (!("undefined" != typeof navigator && void 0 === (null === (n = null === (r = global.process) || void 0 === r ? void 0 : r.versions) || void 0 === n ? void 0 : n.node) && void 0 === (null === (o = global.Bun) || void 0 === o ? void 0 : o.version))) return j.empty();
                    var i = ((t = {})["process.runtime.name"] = "browser", t["process.runtime.description"] = "Web Browser", t["process.runtime.version"] = navigator.userAgent, t);
                    return this._getResourceAttributes(i, e)
                }, e.prototype._getResourceAttributes = function(e, t) {
                    return "" === e["process.runtime.version"] ? (A.debug("BrowserDetector failed: Unable to find required browser resources. "), j.empty()) : new j(z({}, e))
                }, e
            }()),
            te = new(function() {
                function e() {}
                return e.prototype.detect = function(e) {
                    return Promise.resolve(ee.detect(e))
                }, e
            }()),
            re = function(e, t) {
                var r = "function" == typeof Symbol && e[Symbol.iterator];
                if (!r) return e;
                var n, o, i = r.call(e),
                    E = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(n = i.next()).done;) E.push(n.value)
                } catch (e) {
                    o = {
                        error: e
                    }
                } finally {
                    try {
                        n && !n.done && (r = i.return) && r.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return E
            },
            ne = new(function() {
                function e() {
                    this._MAX_LENGTH = 255, this._COMMA_SEPARATOR = ",", this._LABEL_KEY_VALUE_SPLITTER = "=", this._ERROR_MESSAGE_INVALID_CHARS = "should be a ASCII string with a length greater than 0 and not exceed " + this._MAX_LENGTH + " characters.", this._ERROR_MESSAGE_INVALID_VALUE = "should be a ASCII string with a length not exceed " + this._MAX_LENGTH + " characters."
                }
                return e.prototype.detect = function(e) {
                    var t = {},
                        r = D(),
                        n = r.OTEL_RESOURCE_ATTRIBUTES,
                        o = r.OTEL_SERVICE_NAME;
                    if (n) try {
                        var i = this._parseResourceAttributes(n);
                        Object.assign(t, i)
                    } catch (e) {
                        A.debug("EnvDetector failed: " + e.message)
                    }
                    return o && (t["service.name"] = o), new j(t)
                }, e.prototype._parseResourceAttributes = function(e) {
                    var t, r;
                    if (!e) return {};
                    var n = {},
                        o = e.split(this._COMMA_SEPARATOR, -1);
                    try {
                        for (var i = function(e) {
                                var t = "function" == typeof Symbol && Symbol.iterator,
                                    r = t && e[t],
                                    n = 0;
                                if (r) return r.call(e);
                                if (e && "number" == typeof e.length) return {
                                    next: function() {
                                        return e && n >= e.length && (e = void 0), {
                                            value: e && e[n++],
                                            done: !e
                                        }
                                    }
                                };
                                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
                            }(o), E = i.next(); !E.done; E = i.next()) {
                            var a = E.value.split(this._LABEL_KEY_VALUE_SPLITTER, -1);
                            if (2 === a.length) {
                                var u = re(a, 2),
                                    s = u[0],
                                    _ = u[1];
                                if (s = s.trim(), _ = _.trim().split(/^"|"$/).join(""), !this._isValidAndNotEmpty(s)) throw new Error("Attribute key " + this._ERROR_MESSAGE_INVALID_CHARS);
                                if (!this._isValid(_)) throw new Error("Attribute value " + this._ERROR_MESSAGE_INVALID_VALUE);
                                n[s] = decodeURIComponent(_)
                            }
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            E && !E.done && (r = i.return) && r.call(i)
                        } finally {
                            if (t) throw t.error
                        }
                    }
                    return n
                }, e.prototype._isValid = function(e) {
                    return e.length <= this._MAX_LENGTH && this._isBaggageOctetString(e)
                }, e.prototype._isBaggageOctetString = function(e) {
                    for (var t = 0; t < e.length; t++) {
                        var r = e.charCodeAt(t);
                        if (r < 33 || 44 === r || 59 === r || 92 === r || r > 126) return !1
                    }
                    return !0
                }, e.prototype._isValidAndNotEmpty = function(e) {
                    return e.length > 0 && this._isValid(e)
                }, e
            }()),
            oe = new(function() {
                function e() {}
                return e.prototype.detect = function(e) {
                    return Promise.resolve(ne.detect(e))
                }, e
            }()),
            ie = function(e, t, r, n) {
                return new(r || (r = Promise))((function(o, i) {
                    function E(e) {
                        try {
                            u(n.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function a(e) {
                        try {
                            u(n.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function u(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                            e(t)
                        }))).then(E, a)
                    }
                    u((n = n.apply(e, t || [])).next())
                }))
            },
            Ee = function(e, t) {
                var r, n, o, i, E = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; E;) try {
                                if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return E.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        E.label++, n = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = E.ops.pop(), E.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = E.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                            E = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            E.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && E.label < o[1]) {
                                            E.label = o[1], o = i;
                                            break
                                        }
                                        if (o && E.label < o[2]) {
                                            E.label = o[2], E.ops.push(i);
                                            break
                                        }
                                        o[2] && E.ops.pop(), E.trys.pop();
                                        continue
                                }
                                i = t.call(e, E)
                            } catch (e) {
                                i = [6, e], n = 0
                            } finally {
                                r = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, a])
                    }
                }
            },
            ae = function(e) {
                e.forEach((function(e) {
                    if (Object.keys(e.attributes).length > 0) {
                        var t = JSON.stringify(e.attributes, null, 4);
                        A.verbose(t)
                    }
                }))
            };
        t.Resource = j, t.browserDetector = te, t.browserDetectorSync = ee, t.defaultServiceName = x, t.detectResources = function(e) {
            return void 0 === e && (e = {}), ie(void 0, void 0, void 0, (function() {
                var t;
                return Ee(this, (function(r) {
                    switch (r.label) {
                        case 0:
                            return [4, Promise.all((e.detectors || []).map((function(t) {
                                return ie(void 0, void 0, void 0, (function() {
                                    var r, n;
                                    return Ee(this, (function(o) {
                                        switch (o.label) {
                                            case 0:
                                                return o.trys.push([0, 2, , 3]), [4, t.detect(e)];
                                            case 1:
                                                return r = o.sent(), A.debug(t.constructor.name + " found resource.", r), [2, r];
                                            case 2:
                                                return n = o.sent(), A.debug(t.constructor.name + " failed: " + n.message), [2, j.empty()];
                                            case 3:
                                                return [2]
                                        }
                                    }))
                                }))
                            })))];
                        case 1:
                            return t = r.sent(), ae(t), [2, t.reduce((function(e, t) {
                                return e.merge(t)
                            }), j.empty())]
                    }
                }))
            }))
        }, t.detectResourcesSync = function(e) {
            var t;
            void 0 === e && (e = {});
            var r = (null !== (t = e.detectors) && void 0 !== t ? t : []).map((function(t) {
                    try {
                        var r, n = t.detect(e);
                        if (null !== (o = n) && "object" == typeof o && "function" == typeof o.then) {
                            r = new j({}, ie(void 0, void 0, void 0, (function() {
                                return Ee(this, (function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return [4, n];
                                        case 1:
                                            return [2, e.sent().attributes]
                                    }
                                }))
                            })))
                        } else r = n;
                        return r.waitForAsyncAttributes ? r.waitForAsyncAttributes().then((function() {
                            return A.debug(t.constructor.name + " found resource.", r)
                        })) : A.debug(t.constructor.name + " found resource.", r), r
                    } catch (e) {
                        return A.error(t.constructor.name + " failed: " + e.message), j.empty()
                    }
                    var o
                })),
                n = r.reduce((function(e, t) {
                    return e.merge(t)
                }), j.empty());
            return n.waitForAsyncAttributes && n.waitForAsyncAttributes().then((function() {
                ae(r)
            })), n
        }, t.envDetector = oe, t.envDetectorSync = ne, t.hostDetector = Y, t.hostDetectorSync = Z, t.osDetector = J, t.osDetectorSync = W, t.processDetector = Q, t.processDetectorSync = $, t.serviceInstanceIdDetectorSync = q, n = e("default", o.exports), o.exports.Resource, o.exports.browserDetector, o.exports.browserDetectorSync, o.exports.defaultServiceName, o.exports.detectResources, o.exports.detectResourcesSync, o.exports.envDetector, o.exports.envDetectorSync, o.exports.hostDetector, o.exports.hostDetectorSync, o.exports.osDetector, o.exports.osDetectorSync, o.exports.processDetector, o.exports.processDetectorSync, o.exports.serviceInstanceIdDetectorSync
    }), {})
}