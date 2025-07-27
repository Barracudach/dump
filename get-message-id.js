import * as t from "./cc.js";
import * as s from "./uuid.js";

function main() {
    t._RF.push({}, "8d669tvOHNJP6z1eW2ouQay", "get-message-id", void 0);
    e("createMessageId", (() => `node-next-${Date.now()}-${s()}`));
    t._RF.pop()
}