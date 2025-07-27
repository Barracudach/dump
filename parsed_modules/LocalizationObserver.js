import * as t from "./cc.js";
import * as r from "./cc.js";

function main() {
    t._RF.push({}, "25330yuiPBNM6SuzbSACgNa", "LocalizationObserver", void 0);
    e("LocalizationObserver", class {
        constructor() {
            this.eventTarget = void 0, this.eventTarget = new r
        }
        subscribe(e, t, r) {
            this.eventTarget.on(e, t, r)
        }
        subscribeOnce(e, t, r) {
            this.eventTarget.once(e, t, r)
        }
        unsubscribe(e, t, r) {
            this.eventTarget.off(e, t, r)
        }
        unsubscribeAll(e) {
            this.eventTarget.targetOff(e)
        }
        notify(e, t) {
            this.eventTarget.emit(e, t)
        }
    }), t._RF.pop()
}