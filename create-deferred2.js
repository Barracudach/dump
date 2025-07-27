import * as r from "./cc.js";

function main() {
    r._RF.push({}, "eacc6VBZt5IBrq0dsGBFrih", "create-deferred", void 0);
    e("createDeferred", (() => {
        let e, r, t = !1;
        const c = new Promise(((c, s) => {
            e = (...e) => {
                t = !0, c(...e)
            }, r = (...e) => {
                t = !0, s(...e)
            }
        }));
        return {
            resolve: e,
            reject: r,
            promise: c,
            isSettled: () => t
        }
    }));
    r._RF.pop()
}