import * as t from "./cc.js";
import * as a from "./cc.js";

function main() {
    t._RF.push({}, "927c8pwdGlMALBTF3iuEBjD", "TimeTrack", void 0);
    class i {
        static start(e) {
            i.timeMap.has(e) && a("....................[TIME TRACK] key already exist: " + e), i.timeMap.set(e, Date.now())
        }
        static getElapseTime(e, t = !0) {
            if (!i.timeMap.has(e)) return -1;
            const s = Date.now() - i.timeMap.get(e);
            return t && a("....................[TIME TRACK] ElapseTime of " + e + ": " + s), s
        }
        static end(e, t = !0) {
            const a = i.getElapseTime(e, t);
            return i.timeMap.delete(e), a
        }
    }
    e("TimeTrack", i), i.timeMap = new Map, t._RF.pop()
}