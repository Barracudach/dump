import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as s from "./cc.js";
import * as r from "./mttconfig.js";
import * as c from "./EventCustom.js";

function main() {
    var u, a, p, f;
    o._RF.push({}, "4f2bbCdtqlEMrOKO/rkkd9m", "JoinedGameTuple", void 0);
    const {
        ccclass: d,
        property: m
    } = l;
    e("JoinedGameTuple", (u = m(i), d((f = t((p = class extends s {
        constructor(...e) {
            super(...e), n(this, "label", f, this), this._tupleInfo = void 0
        }
        setInfo(e) {
            this._tupleInfo = e, this.label.string = e.GameName
        }
        onTupleClicked() {
            let e = new c(r.clickJoinedGameEvent, !0);
            e.setUserData(this._tupleInfo), this.node.dispatchEvent(e)
        }
    }).prototype, "label", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), a = p)) || a));
    o._RF.pop()
}