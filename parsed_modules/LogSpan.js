import * as s from "./cc.js";

function main() {
    s._RF.push({}, "64febuet65O8awhP9QxO3X0", "LogSpan", void 0);
    t("LogSpan", class {
        constructor(t) {
            this.span = void 0, this.trackAttributes = {}, this.span = t, this.trackAttributes = {}
        }
        get name() {
            return this.span.name
        }
        recordException(t, s) {
            this.span.recordException(t, s)
        }
        end(t) {
            this.span.end(t)
        }
        addEvent(t, s, e) {
            this.span.addEvent(t, s, e)
        }
        setStatus(t) {
            this.span.setStatus(t)
        }
        setAttribute(t, s) {
            this.span.setAttribute(t, s)
        }
        setAttributes(t) {
            this.span.setAttributes(t)
        }
        getTrackAttribute(t) {
            return this.trackAttributes[t]
        }
        getTrackAttributes() {
            return this.trackAttributes
        }
        setTrackAttribute(t, s) {
            this.trackAttributes[t] = s
        }
        setTrackAttributes(t) {
            this.trackAttributes = {
                ...this.trackAttributes,
                ...t
            }
        }
    }), s._RF.pop()
}