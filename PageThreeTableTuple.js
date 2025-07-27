import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as u from "./MttHall.js";
import * as c from "./NodePage.js";
import * as p from "./MultipleGame.js";
import * as d from "./cv.js";
import * as h from "./DoubleClickHandler.js";

function main() {
    var b, g, T, f;
    l._RF.push({}, "63f0aGlwbpJN7TeU/iLgKuz", "PageThreeTableTuple", void 0);
    const {
        ccclass: C,
        property: m
    } = i;
    e("PageThreeTableTuple", (b = m([a]), C((f = t((T = class extends o {
        constructor(...e) {
            super(...e), n(this, "tupleLabels", f, this), this.tupleId = 0, this.tableId = 0
        }
        start() {
            if (d.appConfig.isLandscapeLayout) {
                let e = this.node.addComponent(h),
                    t = new o.EventHandler;
                t.target = this.node, t.component = "PageThreeTableTuple", t.handler = "onOpenTable", e.doubleClickEvents.push(t)
            } else this.node.on(s.EventType.TOUCH_END, this.onTouch, this)
        }
        onOpenTable() {
            let e = r.getScene().getComponentInChildren(u);
            e && e.isGamePlaying() && e.callMttGameView(this.tableId)
        }
        onTouch() {
            p.instance || this.onOpenTable()
        }
        setInfo(e, t) {
            this.tupleId = t, this.tableId = e.TableId, this.tupleLabels[0].string = (e.TableId % 1e3).toString(), this.tupleLabels[1].string = e.PlayersNum.toString(), this.tupleLabels[2].string = `${c.roundValue(e.MaxCoins)}/${c.roundValue(e.MinCoins)}`, this.showBg()
        }
        showBg() {}
    }).prototype, "tupleLabels", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), g = T)) || g));
    l._RF.pop()
}