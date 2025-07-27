import * as e from "./cc.js";
import * as n from "./errors.js";
import * as i from "./helpers.js";
import * as r from "./helpers.js";
import * as s from "./helpers.js";

function main() {
    t({
        assertEventExists: u,
        assertEventType: f,
        assertMessageId: v,
        assertTrackEventName: p,
        assertTrackEventProperties: w,
        assertTraits: d,
        assertUserIdentity: function(t) {
            const e = ".userId/anonymousId/previousId/groupId",
                r = (t => t.userId ?? t.anonymousId ?? t.groupId ?? t.previousId)(t);
            if (!s(r)) throw new n(e, c);
            if (!i(r)) throw new n(e, o)
        },
        validateEvent: function(t) {
            u(t), f(t), v(t), "track" === t.type && (p(t), w(t));
            ["group", "identify"].includes(t.type) && d(t)
        }
    }), e._RF.push({}, "642fciJQ+RGm6z2u/N5GEXc", "assertions", void 0);
    const o = "is not a string",
        a = "is not an object",
        c = "is nil";

    function u(t) {
        if (!s(t)) throw new n("Event", c);
        if ("object" != typeof t) throw new n("Event", a)
    }

    function f(t) {
        if (!i(t.type)) throw new n(".type", o)
    }

    function p(t) {
        if (!i(t.event)) throw new n(".event", o)
    }

    function w(t) {
        if (!r(t.properties)) throw new n(".properties", a)
    }

    function d(t) {
        if (!r(t.traits)) throw new n(".traits", a)
    }

    function v(t) {
        if (!i(t.messageId)) throw new n(".messageId", o)
    }
    e._RF.pop()
}