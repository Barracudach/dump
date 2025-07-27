import * as e from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";

function main() {
    var o, d;
    e._RF.push({}, "fdd55gdtAZENIhPzTsDigWt", "SingletonPrefab", void 0);
    const {
        ccclass: f
    } = n;
    t("SingletonPrefab", f(((d = class extends s {
        static getSinglePrefabInst(t, e) {
            let n = e;
            return n || (n = i.getScene().getComponentInChildren(r).node), this.prefabInst && a(this.prefabInst, !0) && (n.getChildByUuid(this.prefabInst.uuid) || a(this.prefabInst, !0)) || (this.prefabInst = c(t), n.addChild(this.prefabInst)), this.prefabInst
        }
    }).prefabInst = null, o = d)) || o);
    e._RF.pop()
}