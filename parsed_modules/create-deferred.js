import * as r from "./cc.js";

function main() {
    r._RF.push({}, "a7cbbCSpApOgqoVu0ee8ojh", "create-deferred", void 0);
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