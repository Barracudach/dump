import * as t from "./cc.js";
import * as i from "./Helpers2.js";
import * as e from "./BaseCasinoArgs.js";

function main() {
    t._RF.push({}, "265007eeAJAkaQJ7wgBLIRv", "InitialDataArgs", void 0);
    n("Platform", function(n) {
        return n.desktop = "desktop", n.mobile = "mobile", n
    }({})), n("PlatformType", function(n) {
        return n.unknown = "unknown", n.web = "Web", n.windows = "Windows", n.android = "Android", n.iOS = "iOS", n.macOS = "macOS", n
    }({}));
    n("InitialDataArgs", class extends e {
        constructor(n) {
            super(i.initialData), this.data = n
        }
    }), t._RF.pop()
}