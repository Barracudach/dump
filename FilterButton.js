import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as l from "./cc.js";
import * as C from "./MTTConnector.js";
import * as g from "./NodeTools.js";

function main() {
    var u, f, p, b, S, m;
    i._RF.push({}, "bb374q7GsZEUYZA7+fDnUjx", "FilterButton", void 0);
    const {
        ccclass: y,
        property: _
    } = s;
    e("default", (u = _(l), f = _(r), y((S = t((b = class extends c {
        constructor(...e) {
            super(...e), o(this, "selected", S, this), o(this, "toggleCircle", m, this), this._isSelected = !1, this.toggleCircleOffset = 5
        }
        onLoad() {
            this._isSelected = this.selected.enabled
        }
        checkSelected() {
            return this._isSelected
        }
        setLabelColor(e) {
            let t = this.node.getChildByName(e);
            t && g.changeNodeColor(t, (new n).fromHEX(this.checkSelected() ? C.instance.filterSelectedColorCode : C.instance.filterColorCode))
        }
        setChildColor(e) {
            let t = this.node.getChildByName(e);
            t && t.children.forEach((e => g.changeNodeColor(e, (new n).fromHEX(this.checkSelected() ? C.instance.filterSelectedColorCode : C.instance.filterColorCode))))
        }
        onClicked() {
            if (this._isSelected = !this._isSelected, this.selected.enabled = this.checkSelected(), this.setLabelColor("label"), this.setChildColor("price"), this.toggleCircle) {
                let e = this.node.getComponent(d),
                    t = this.toggleCircle.getComponent(d);
                h().target(this.toggleCircle).to(.05, {
                    position: a((this.checkSelected() ? 1 : -1) * ((e.width - t.width) / 2 - this.toggleCircleOffset), this.toggleCircle.getPosition().y, this.toggleCircle.getPosition().z)
                }).start()
            }
        }
    }).prototype, "selected", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), m = t(b.prototype, "toggleCircle", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), p = b)) || p));
    i._RF.pop()
}