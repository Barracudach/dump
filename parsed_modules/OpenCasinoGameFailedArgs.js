import * as s from "./cc.js";
import * as n from "./Helpers2.js";
import * as a from "./BaseCasinoArgs.js";

function main() {
    s._RF.push({}, "0e792810qZAzZcXAEZAG9+U", "OpenCasinoGameFailedArgs", void 0);
    e("OpenCasinoGameFailedArgs", class extends a {
        constructor(e) {
            super(n.openCasinoGameFailed), this.data = e
        }
    }), s._RF.pop()
}