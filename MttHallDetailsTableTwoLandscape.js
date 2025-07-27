import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as l from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as s from "./cc.js";
import * as o from "./MttHallTableTwoScript.js";

function main() {
    var r, u, p, c, d, f;
    n._RF.push({}, "830eeKAofdAM7ms9GzU/ZKO", "MttHallDetailsTableTwoLandscape", void 0);
    const {
        ccclass: h,
        property: T
    } = s;
    e("default", (r = T(a), u = T(a), h((d = t((c = class extends o {
        constructor(...e) {
            super(...e), l(this, "noPlayerPanel", d, this), l(this, "searchPanel", f, this)
        }
        setTuplePosition(e, t) {}
        setTupleInfo(e, t) {
            null != this._tableList[t] ? super.setTupleInfo(e, t) : e.setInfo(this._tableList[t], t, this._mttHallInfo.Status, this.tournamentMode, !1)
        }
        updateTupleInfo(e, t) {
            null != t[e.tupleId] ? super.updateTupleInfo(e, t) : e.setInfo(t[e.tupleId], e.tupleId, this._mttHallInfo.Status, this.tournamentMode, !1)
        }
        setNoResultContent(e) {
            this.noPlayerPanel.active = e, this.searchPanel.active = !e
        }
        updateTuplesPosition(e) {}
        addTupleNode() {
            let e = super.addTupleNode();
            return null == e && (e = i(this.tuplePrefab)), e
        }
    }).prototype, "noPlayerPanel", [r], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = t(c.prototype, "searchPanel", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), p = c)) || p));
    n._RF.pop()
}