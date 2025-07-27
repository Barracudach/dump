import * as t from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as c from "./cc.js";
import * as a from "./ThemeSystem.js";

function main() {
    var s;
    t._RF.push({}, "ffc9eomNqNGUql1L1Dcxo5Q", "ThemeSystemEditBox", void 0);
    const {
        ccclass: i,
        requireComponent: l
    } = n;
    e("ThemeSystemEditBox", i(s = l(o)(s = class extends c {
        onLoad() {
            let e = this.getComponent(o);
            e.textLabel && this.updateTheme(e.textLabel), e.placeholderLabel && this.updateTheme(e.placeholderLabel)
        }
        updateTheme(e) {
            let t = e.getComponent(a);
            if (t) {
                let e = t.node.active;
                t.node.active = !0, t.applyTheme(), t.node.active = e
            }
        }
    }) || s) || s);
    t._RF.pop()
}