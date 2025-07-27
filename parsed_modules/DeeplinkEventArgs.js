import * as s from "./cc.js";
import * as t from "./Helpers2.js";
import * as n from "./Helpers2.js";
import * as i from "./BaseArgs.js";

function main() {
    s._RF.push({}, "136a0sA551DgpyyspSIjhyL", "DeeplinkEventArgs", void 0);
    e("DeepLinkEventArgs", class extends i {
        constructor(e, s) {
            super(t.Poker, n.DeepLinkEvent), this.data = void 0, this.gotoPage = e, Object.assign(this, s)
        }
    }), s._RF.pop()
}