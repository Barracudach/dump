import * as t from "./cc.js";

function main() {
    t._RF.push({}, "972bdvm5ptFQYKibnlZVtzv", "emitter", void 0);
    s("Emitter", class {
        constructor(s) {
            this.maxListeners = void 0, this.callbacks = {}, this.warned = !1, this.maxListeners = (null == s ? void 0 : s.maxListeners) ?? 10
        }
        warnIfPossibleMemoryLeak(s) {
            this.warned || this.maxListeners && this.callbacks[s].length > this.maxListeners && (console.warn(`Event Emitter: Possible memory leak detected; ${String(s)} has exceeded ${this.maxListeners} listeners.`), this.warned = !0)
        }
        on(s, t) {
            return this.callbacks[s] ? (this.callbacks[s].push(t), this.warnIfPossibleMemoryLeak(s)) : this.callbacks[s] = [t], this
        }
        once(s, t) {
            const e = (...i) => {
                this.off(s, e), t.apply(this, i)
            };
            return this.on(s, e), this
        }
        off(s, t) {
            const e = (this.callbacks[s] ?? []).filter((s => s !== t));
            return this.callbacks[s] = e, this
        }
        emit(s, ...t) {
            return (this.callbacks[s] ?? []).forEach((s => {
                s.apply(this, t)
            })), this
        }
    }), t._RF.pop()
}