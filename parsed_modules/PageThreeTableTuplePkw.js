import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as p from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as u from "./PageThreeTableTuple.js";
import * as h from "./FormatParser.js";

function main() {
    var d, c, b, g, m, T;
    i._RF.push({}, "4fdd35hHWZEHKWm+f4vaKFn", "PageThreeTableTuplePkw", void 0);
    const {
        ccclass: f,
        property: P
    } = r;
    e("PageThreeTableTuplePkw", (d = P(o), c = P([a]), f((m = t((g = class extends u {
        constructor(...e) {
            super(...e), n(this, "tupleBg", m, this), n(this, "bgsf", T, this)
        }
        update(e) {
            let t = this.tupleLabels[0].node.parent.getComponent(s).width * (this.tupleLabels[0].node.parent.getComponent(s).anchorX - .5),
                n = 0 - this.node.getComponent(s).width * this.node.getComponent(s).anchorX,
                i = this.node.getComponent(s).width * this.tupleLabels[0].node.parent.getComponent(l).left,
                o = this.node.parent.parent.parent.parent.getChildByName("table_header").getChildByName("table copy").getComponent(s).width / 2;
            this.tupleLabels[0].node.parent.position = new p(t + n + i + o, this.tupleLabels[0].node.parent.position.y, this.tupleLabels[0].node.parent.position.z)
        }
        setInfo(e, t) {
            this.tupleId = t, this.tableId = e.TableId, this.tupleLabels[0].string = (e.TableId % 1e3).toString(), this.tupleLabels[1].string = e.PlayersNum.toString(), this.setChipsLabel(e), this.showBg()
        }
        setChipsLabel(e) {
            this.tupleLabels[2].string = `${h.ThousandPointFormat(h.DisplayGold(e.MinCoins))}/${h.ThousandPointFormat(h.DisplayGold(e.MaxCoins))}`
        }
    }).prototype, "tupleBg", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = t(g.prototype, "bgsf", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), b = g)) || b));
    i._RF.pop()
}