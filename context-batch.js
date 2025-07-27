import * as e from "./cc.js";
import * as s from "./uuid.js";

function main() {
    e._RF.push({}, "eef95rW7HdEurT2ZjrqKQCw", "context-batch", void 0);
    t("ContextBatch", class {
        constructor(t) {
            this.id = s(), this.items = [], this.sizeInBytes = 0, this.maxEventCount = void 0, this.maxEventCount = Math.max(1, t)
        }
        tryAdd(t) {
            if (this.length === this.maxEventCount) return {
                success: !1,
                message: `Event limit of ${this.maxEventCount} has been exceeded.`
            };
            const e = this.calculateSize(t.context);
            return e > 32768 ? {
                success: !1,
                message: "Event exceeds maximum event size of 32 KB"
            } : this.sizeInBytes + e > 491520 ? {
                success: !1,
                message: "Event has caused batch size to exceed 480 KB"
            } : (this.items.push(t), this.sizeInBytes += e, {
                success: !0
            })
        }
        get length() {
            return this.items.length
        }
        calculateSize(t) {
            return encodeURI(JSON.stringify(t.event)).split(/%..|i/).length
        }
        getEvents() {
            return this.items.map((({
                context: t
            }) => t.event))
        }
        getContexts() {
            return this.items.map((t => t.context))
        }
        resolveEvents() {
            this.items.forEach((({
                resolver: t,
                context: e
            }) => t(e)))
        }
    }), e._RF.pop()
}