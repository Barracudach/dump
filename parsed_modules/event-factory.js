import * as t from "./cc.js";
import * as s from "./events.js";
import * as n from "./assertions.js";
import * as c from "./get-message-id.js";

function main() {
    t._RF.push({}, "1df09aO6tFLLKig1wJHbV7t", "event-factory", void 0);
    e("NodeEventFactory", class extends s {
        constructor() {
            super({
                createMessageId: c,
                onFinishedEvent: e => {
                    n(e)
                }
            })
        }
    }), t._RF.pop()
}