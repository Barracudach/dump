import * as t from "./cc.js";
import * as u from "./event-queue2.js";
import * as s from "./priority-queue.js";

function main() {
    t._RF.push({}, "ee1b6nMFlRK5rVzpC3O+1/6", "event-queue", void 0);
    class n extends s {
        constructor() {
            super(1, [])
        }
        getAttempts(e) {
            return e.attempts ?? 0
        }
        updateAttempts(e) {
            return e.attempts = this.getAttempts(e) + 1, this.getAttempts(e)
        }
    }
    e("NodeEventQueue", class extends u {
        constructor() {
            super(new n)
        }
    }), t._RF.pop()
}