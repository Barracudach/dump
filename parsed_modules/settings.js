import * as e from "./cc.js";
import * as i from "./errors.js";

function main() {
    e._RF.push({}, "76c76GsbRxKz7I2aOhJK2FU", "settings", void 0);
    t("validateSettings", (t => {
        if (!t.writeKey) throw new i("writeKey", "writeKey is missing.")
    }));
    e._RF.pop()
}