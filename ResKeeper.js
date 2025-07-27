import * as t from "./cc.js";
import * as o from "./cc.js";
import * as s from "./cc.js";
import * as r from "./ResLoader.js";

function main() {
    var u;
    s._RF.push({}, "96836DGT65KgYpZHbqYcZYx", "ResKeeper", void 0);
    const {
        ccclass: a,
        property: c
    } = o;
    e("default", a(u = class extends t {
        constructor(...e) {
            super(...e), this.autoRes = []
        }
        getUseKey() {
            return ""
        }
        loadRes(e, s, t) {
            let o = this.getUseKey();
            r.loadRes(e, s, ((o, r) => {
                o || this.autoRes.push({
                    url: e,
                    type: s
                }), t && t(o, r)
            }), o)
        }
        releaseAutoRes() {
            for (let e = 0; e < this.autoRes.length; e++) {
                const s = this.autoRes[e];
                r.releaseRes(s.url, s.type, s.use || this.getUseKey())
            }
        }
        autoReleaseRes(e) {
            this.autoRes.push(e)
        }
    }) || u);
    s._RF.pop()
}