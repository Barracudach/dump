import * as r from "./cc.js";

function main() {
    r._RF.push({}, "637a79cXAtDf5BH4GdbMCqf", "Permutation", void 0);
    t("Permutation", class {
        constructor(t) {
            this.arr = void 0, this.result = void 0, this.len = void 0, this.arr = t.slice(), this.result = [], this.len = 0, this.run(0)
        }
        run(t) {
            if (t == this.arr.length - 1) return this.result.push(this.arr.slice()), void this.len++;
            for (let r = t; r < this.arr.length; r++)[this.arr[t], this.arr[r]] = [this.arr[r], this.arr[t]], this.run(t + 1), [this.arr[t], this.arr[r]] = [this.arr[r], this.arr[t]]
        }
    }), r._RF.pop()
}