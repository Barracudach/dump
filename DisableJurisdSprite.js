import * as t from "./cc.js";
import * as n from "./cc.js";
import * as i from "./cc.js";
import * as s from "./Gradient.js";
import * as o from "./DisableJurisdBase.js";

function main() {
    var r;
    t._RF.push({}, "c706aGv9SlJzaX0gmUwLVSP", "DisableJurisdSprite", void 0);
    const {
        ccclass: a,
        property: u,
        menu: c,
        requireComponent: d,
        executeInEditMode: l,
        disallowMultiple: p,
        playOnFocus: h
    } = i;
    e("default", a(r = p(r = l(r = h(r = c("Custom UI/Disable Jurisdiction Sprite")(r = d(n)(r = class extends o {
        onLoad() {
            super.onLoad()
        }
        reload() {
            if (!this.getComponent(n) || !this.enabled) return;
            this.getComponent(n).enabled = this.isShow();
            let e = this.node.getComponent(s);
            e && (e.enabled = this.getComponent(n).enabled)
        }
    }) || r) || r) || r) || r) || r) || r);
    t._RF.pop()
}