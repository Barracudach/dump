import * as e from "./cc.js";

function main() {
    e._RF.push({}, "400bdecYmdFxodkjNXZ0VSr", "fetch", void 0);
    t("fetch", (async (...t) => {
        if (globalThis.fetch) return globalThis.fetch(...t);
        throw new Error("Invariant: an edge runtime that does not support fetch should not exist")
    }));
    e._RF.pop()
}