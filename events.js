import * as e from "./cc.js";
import * as n from "./interfaces.js";
import * as s from "./dset.js";
import * as i from "./pick.js";

function main() {
    e._RF.push({}, "0da63RoW8lHvIoD7cHqtw8+", "events", void 0);
    class o {
        constructor(t) {
            this.createMessageId = void 0, this.onEventMethodCall = void 0, this.onFinishedEvent = void 0, this.settings = t, this.createMessageId = t.createMessageId, this.onEventMethodCall = t.onEventMethodCall ?? (() => {}), this.onFinishedEvent = t.onFinishedEvent ?? (() => {})
        }
    }
    t("CoreEventFactory", class {
        constructor(t) {
            this.settings = void 0, this.settings = new o(t)
        }
        track(t, e, n, s) {
            return this.settings.onEventMethodCall({
                type: "track",
                options: n
            }), this.normalize({
                ...this.baseEvent(),
                event: t,
                type: "track",
                properties: e ?? {},
                options: {
                    ...n
                },
                integrations: {
                    ...s
                }
            })
        }
        page(t, e, n, s, i) {
            this.settings.onEventMethodCall({
                type: "page",
                options: s
            });
            const o = {
                type: "page",
                properties: {
                    ...n
                },
                options: {
                    ...s
                },
                integrations: {
                    ...i
                }
            };
            return null !== t && (o.category = t, o.properties = o.properties ?? {}, o.properties.category = t), null !== e && (o.name = e), this.normalize({
                ...this.baseEvent(),
                ...o
            })
        }
        screen(t, e, n, s, i) {
            this.settings.onEventMethodCall({
                type: "screen",
                options: s
            });
            const o = {
                type: "screen",
                properties: {
                    ...n
                },
                options: {
                    ...s
                },
                integrations: {
                    ...i
                }
            };
            return null !== t && (o.category = t), null !== e && (o.name = e), this.normalize({
                ...this.baseEvent(),
                ...o
            })
        }
        identify(t, e, n, s) {
            return this.settings.onEventMethodCall({
                type: "identify",
                options: n
            }), this.normalize({
                ...this.baseEvent(),
                type: "identify",
                userId: t,
                traits: e ?? {},
                options: {
                    ...n
                },
                integrations: s
            })
        }
        group(t, e, n, s) {
            return this.settings.onEventMethodCall({
                type: "group",
                options: n
            }), this.normalize({
                ...this.baseEvent(),
                type: "group",
                traits: e ?? {},
                options: {
                    ...n
                },
                integrations: {
                    ...s
                },
                groupId: t
            })
        }
        alias(t, e, n, s) {
            this.settings.onEventMethodCall({
                type: "alias",
                options: n
            });
            const i = {
                userId: t,
                type: "alias",
                options: {
                    ...n
                },
                integrations: {
                    ...s
                }
            };
            return null !== e && (i.previousId = e), void 0 === t ? this.normalize({
                ...i,
                ...this.baseEvent()
            }) : this.normalize({
                ...this.baseEvent(),
                ...i
            })
        }
        baseEvent() {
            return {
                integrations: {},
                options: {}
            }
        }
        context(t) {
            const e = ["userId", "anonymousId", "timestamp", "messageId"];
            delete t.integrations;
            const s = Object.keys(t),
                i = t.context ?? {},
                o = {};
            return s.forEach((s => {
                "context" !== s && (e.includes(s) ? n(o, s, t[s]) : n(i, s, t[s]))
            })), [i, o]
        }
        normalize(t) {
            var e;
            const n = Object.keys(t.integrations ?? {}).reduce(((e, n) => {
                var s;
                return {
                    ...e,
                    [n]: Boolean(null == (s = t.integrations) ? void 0 : s[n])
                }
            }), {});
            t.options = s(t.options || {}, ((t, e) => void 0 !== e));
            const o = {
                    ...n,
                    ...null == (e = t.options) ? void 0 : e.integrations
                },
                [r, a] = t.options ? this.context(t.options) : [],
                {
                    options: p,
                    ...c
                } = t,
                l = {
                    timestamp: new Date,
                    ...c,
                    context: r,
                    integrations: o,
                    ...a,
                    messageId: p.messageId || this.settings.createMessageId()
                };
            return this.settings.onFinishedEvent(l), i(l), l
        }
    }), e._RF.pop()
}