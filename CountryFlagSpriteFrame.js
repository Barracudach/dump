import * as t from "./cc.js";
import * as n from "./cc.js";
import * as r from "./cc.js";
import * as a from "./cc.js";

function main() {
    a._RF.push({}, "ae178m0YWNC7ocHDXClswoB", "CountryFlagSpriteFrame", void 0);
    e("default", class extends t {
        static loadFlag(e, t = null, a = null, l = !1) {
            if (!e) return void(a && a("Invalid codeString"));
            e = e.trim();
            const o = (l ? e : `textures/nationFlags/${e.toLowerCase()}`) + "/spriteFrame";
            r.load(o, n, ((r, n) => {
                r ? null == a || a(r) : null == t || t(n, e)
            }))
        }
    }), a._RF.pop()
}