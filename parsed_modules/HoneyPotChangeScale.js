import * as t from "./cc.js";
import * as s from "./cc.js";
import * as c from "./cc.js";
import * as a from "./cc.js";
import * as n from "./HoneyPotBaseNode.js";

function main() {
    var l;
    t._RF.push({}, "64706pjmh9DOKa3EnRry+qv", "HoneyPotChangeScale", void 0);
    const {
        ccclass: o
    } = s;
    e("default", o(l = class extends n {
        constructor(...e) {
            super(...e), this.orgScale = void 0, this.changeScale = void 0
        }
        initialize(e) {
            e && e.scale && (this.changeScale = e.scale)
        }
        getKey() {
            return this.getCashGameKey()
        }
        modify() {
            this._updateScale(this.changeScale)
        }
        restore() {
            null != this.orgScale && this._updateScale(this.orgScale)
        }
        _updateScale(e) {
            null != e && (null == this.orgScale && (this.orgScale = new c(this.node.scale.x, this.node.scale.y)), this.node.scale = new a(e.x, e.y, 1))
        }
    }) || l);
    t._RF.pop()
}