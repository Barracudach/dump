import * as t from "./cc.js";
import * as n from "./cc.js";
import * as e from "./cc.js";
import * as r from "./HoneyPotBaseNode.js";
import * as s from "./HoneyPotHelper.js";

function main() {
    var d;
    e._RF.push({}, "23785gmGmRBLZq//KAcPRVp", "HoneyPotChangeColor", void 0);
    const {
        ccclass: l
    } = n;
    o("default", l(d = class extends r {
        constructor(...o) {
            super(...o), this.orgColor = void 0, this._blendNode = void 0
        }
        initialize(o) {
            o && o.blendNode ? this._blendNode = o.blendNode : this._blendNode = this.node
        }
        getKey() {
            return this.getCashGameKey()
        }
        modify() {
            this._blendNode && (null == this.orgColor && (this.orgColor = this._blendNode.getComponent(t).color), this._blendNode.getComponent(t).color = s.getChangedColor(this._blendNode.getComponent(t).color))
        }
        restore() {
            this._blendNode && this.orgColor && (this._blendNode.getComponent(t).color = this.orgColor)
        }
    }) || d);
    e._RF.pop()
}