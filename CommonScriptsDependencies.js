import * as s from "./cc.js";

function main() {
    s._RF.push({}, "576a2yr3LlJ9opDe3mWO5Gz", "CommonScriptsDependencies", void 0);
    class t {
        static isInit() {
            return t._isInit
        }
        static getDeps() {
            return t.deps
        }
        static setDeps(e) {
            t._isInit = !0, t.deps = e
        }
    }
    e("CommonScriptsDependencies", t), t.deps = void 0, t._isInit = !1, s._RF.pop()
}