import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as a from "./Holdem_Basic_Item.js";

function main() {
    var c, l, u, p;
    o._RF.push({}, "f263cNlI+NAgbnezQLLqCS9", "CustomScrollViewItem", void 0);
    const {
        ccclass: d,
        property: h
    } = s;
    e("default", (c = h(r), d((p = t((u = class extends a {
        constructor(...e) {
            super(...e), i(this, "evenRowBg", p, this), this._data = void 0
        }
        setData(e) {
            this._data = e, this.evenRowBg && this.scheduleOnce(this.updateBg)
        }
        refreshData() {
            this.setData(this._data)
        }
        updateBg() {
            this.evenRowBg.active = this.node.getComponent(n).priority % 2 == 1
        }
    }).prototype, "evenRowBg", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), l = u)) || l));
    o._RF.pop()
}