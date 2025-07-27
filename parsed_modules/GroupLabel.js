import * as o from "./cc.js";
import * as e from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";

function main() {
    var n;
    s._RF.push({}, "c0bdajZIltJdZOx+AzYQLE+", "GroupLabel", void 0);
    const {
        ccclass: c
    } = o;
    t("default", c(n = class extends e {
        constructor(...t) {
            super(...t), this.groupLabels = []
        }
        onLoad() {
            this.groupLabels = this.getComponentsInChildren(r)
        }
        start() {}
        setString(t) {
            for (const s of this.groupLabels) s.string = t
        }
        getString() {
            var t;
            return (null == (t = this.groupLabels[0]) ? void 0 : t.string) || ""
        }
    }) || n);
    s._RF.pop()
}