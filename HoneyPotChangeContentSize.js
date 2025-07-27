import * as t from "./cc.js";
import * as n from "./cc.js";
import * as i from "./cc.js";
import * as s from "./cc.js";
import * as o from "./HoneyPotBaseNode.js";

function main() {
    var h;
    t._RF.push({}, "a2cf4ng26NL2Id8JzlYbD0r", "HoneyPotChangeContentSize", void 0);
    const {
        ccclass: c
    } = s;
    e("default", c(h = class extends o {
        constructor(...e) {
            super(...e), this.orgSize = void 0, this.changeSize = void 0
        }
        initialize(e) {
            e && e.size && (this.changeSize = e.size)
        }
        getKey() {
            return this.getCashGameKey()
        }
        modify() {
            if (null != this.changeSize) {
                const e = this.node.getContentSize(),
                    t = new i(e.width + this.changeSize.width, e.height + this.changeSize.height);
                this._updateScale(t)
            }
        }
        restore() {
            null != this.orgSize && this._updateScale(this.orgSize)
        }
        _updateScale(e) {
            null != e && (null == this.orgSize && (this.orgSize = this.node.getContentSize()), this.node.getComponent(n).setContentSize(e))
        }
    }) || h);
    t._RF.pop()
}