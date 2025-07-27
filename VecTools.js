import * as t from "./cc.js";
import * as c from "./cc.js";

function main() {
    c._RF.push({}, "8dc60hO7xtLf73dGBlKmEp6", "VecTools", void 0);
    e("VecTools", class {
        static comapreVec3ToSingleValue(e, c, s = !0) {
            return s ? e.equals(t(c, c, c)) : e.x === c || e.y === c
        }
    }), c._RF.pop()
}