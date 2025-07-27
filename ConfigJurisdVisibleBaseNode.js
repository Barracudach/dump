import * as i from "./cc.js";
import * as s from "./cc.js";
import * as t from "./DisableJurisdBase.js";

function main() {
    var c;
    i._RF.push({}, "0ef37JKi0hFhqbTE6Cmk72E", "ConfigJurisdVisibleBaseNode", void 0);
    const {
        ccclass: o,
        executeInEditMode: n,
        disallowMultiple: r,
        playOnFocus: d
    } = s;
    e("ConfigJurisdVisibleBaseNode", o(c = r(c = n(c = d(c = class extends t {
        isApply() {
            return this.isShow()
        }
        setChildrenNodeVisible(e) {
            this.node.children.forEach((i => {
                i.active = e
            }))
        }
    }) || c) || c) || c) || c);
    i._RF.pop()
}