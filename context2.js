import * as e from "./cc.js";
import * as s from "./uuidv4.js";
import * as i from "./dset.js";
import * as r from "./logger.js";
import * as n from "./stats.js";

function main() {
    e._RF.push({}, "caf095Ff0tP3aEjSldOX0Kh", "context", void 0);
    class o {
        constructor(t) {
            this.retry = void 0, this.type = void 0, this.reason = void 0, this.retry = t.retry ?? !0, this.type = t.type ?? "plugin Error", this.reason = t.reason ?? ""
        }
    }
    t("ContextCancelation", o);
    t("CoreContext", class {
        constructor(t, e = s(), i = new n, o = new r) {
            this.event = void 0, this.logger = void 0, this.stats = void 0, this.attempts = 0, this._failedDelivery = void 0, this._id = void 0, this.event = t, this._id = e, this.logger = o, this.stats = i
        }
        static system() {}
        isSame(t) {
            return t.id === this.id
        }
        cancel(t) {
            if (t) throw t;
            throw new o({
                reason: "Context Cancel"
            })
        }
        log(t, e, s) {
            this.logger.log(t, e, s)
        }
        get id() {
            return this._id
        }
        updateEvent(t, e) {
            if ("integrations" === t.split(".")[0]) {
                var s;
                const e = t.split(".")[1];
                if (!1 === (null == (s = this.event.integrations) ? void 0 : s[e])) return this.event
            }
            return i(this.event, t, e), this.event
        }
        failedDelivery() {
            return this._failedDelivery
        }
        setFailedDelivery(t) {
            this._failedDelivery = t
        }
        logs() {
            return this.logger.logs
        }
        flush() {
            this.logger.flush(), this.stats.flush()
        }
        toJSON() {
            return {
                id: this._id,
                event: this.event,
                logs: this.logger.logs,
                metrics: this.stats.metrics
            }
        }
    }), e._RF.pop()
}