import * as t from "./cc.js";
import * as i from "./cc.js";
import * as s from "./cc.js";
import * as n from "./Gradient.js";
import * as r from "./DisableJurisdBase.js";

function main() {
    var a;
    s._RF.push({}, "952ccTsM09JxYjxOL/0i+5e", "DisableJurisdGraphics", void 0);
    const {
        ccclass: c,
        property: o,
        menu: u,
        requireComponent: l,
        executeInEditMode: d,
        disallowMultiple: h,
        playOnFocus: p
    } = i;
    e("default", c(a = h(a = d(a = p(a = u("Custom UI/Disable Jurisdiction Graphics")(a = l(t)(a = class extends r {
        constructor(...e) {
            super(...e), this.graphics = null
        }
        onLoad() {
            this.graphics = this.getComponent(t), super.onLoad()
        }
        reload() {
            if (!this.graphics || !this.enabled) return;
            this.graphics.enabled = this.isShow();
            let e = this.node.getComponent(n);
            e && (e.enabled = this.graphics.enabled)
        }
    }) || a) || a) || a) || a) || a) || a);
    s._RF.pop()
}