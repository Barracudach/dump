import * as t from "./cc.js";

function main() {
    t._RF.push({}, "bd7bfKAvF5H/KQXnmPUzyt3", "MathExtension", void 0), Math.clamp = function(t, n, c) {
        return t < n ? n : t > c ? c : t
    }, Math.clamp01 = function(t) {
        return Math.clamp(t, 0, 1)
    }, t._RF.pop()
}