import * as c from "./cc.js";

function main() {
    c._RF.push({}, "b3fe6je8tFJsKpD0RHOL9RS", "pick", void 0);
    e("pickBy", ((e, c) => Object.keys(e).filter((t => c(t, e[t]))).reduce(((c, t) => (c[t] = e[t], c)), {})));
    c._RF.pop()
}