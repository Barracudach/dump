import * as t from "./cc.js";
import * as o from "./cc.js";
import * as e from "./cc.js";
import * as s from "./cc.js";

function main() {
    var c;
    s._RF.push({}, "73bdbVQBVFGyqvZnqFiPIkl", "CustomProgressBar", void 0);
    const {
        ccclass: n,
        property: a
    } = o;
    r("default", n(c = class extends e {
        onSliderEvent(r) {
            r instanceof t && (this.progress = r.progress)
        }
    }) || c);
    s._RF.pop()
}