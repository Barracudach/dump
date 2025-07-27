import * as e from "./cc.js";
import * as s from "./emitter.js";
import * as u from "./backoff.js";

function main() {
    e._RF.push({}, "be5d8AzkbpMBZFFPCrm16xr", "priority-queue", void 0);
    const i = t("ON_REMOVE_FROM_FUTURE", "onRemoveFromFuture");
    t("PriorityQueue", class extends s {
        constructor(t, e, s) {
            super(), this.future = [], this.queue = void 0, this.seen = void 0, this.maxAttempts = void 0, this.maxAttempts = t, this.queue = e, this.seen = s ?? {}
        }
        push(...t) {
            const e = t.map((t => !(this.updateAttempts(t) > this.maxAttempts || this.includes(t)) && (this.queue.push(t), !0)));
            return this.queue = this.queue.sort(((t, e) => this.getAttempts(t) - this.getAttempts(e))), e
        }
        pushWithBackoff(t, e = 0) {
            if (0 == e && 0 === this.getAttempts(t)) return this.push(t)[0];
            const s = this.updateAttempts(t);
            if (s > this.maxAttempts || this.includes(t)) return !1;
            let h = u({
                attempt: s - 1
            });
            return e > 0 && h < e && (h = e), setTimeout((() => {
                this.queue.push(t), this.future = this.future.filter((e => e.id !== t.id)), this.emit(i)
            }), h), this.future.push(t), !0
        }
        getAttempts(t) {
            return this.seen[t.id] ?? 0
        }
        updateAttempts(t) {
            return this.seen[t.id] = this.getAttempts(t) + 1, this.getAttempts(t)
        }
        includes(t) {
            return this.queue.includes(t) || this.future.includes(t) || Boolean(this.queue.find((e => e.id === t.id))) || Boolean(this.future.find((e => e.id === t.id)))
        }
        pop() {
            return this.queue.shift()
        }
        get length() {
            return this.queue.length
        }
        get todo() {
            return this.queue.length + this.future.length
        }
    }), e._RF.pop()
}