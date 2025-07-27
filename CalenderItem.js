import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as p from "./DatePicker.js";

function main() {
    var D, d, g, b, y, S;
    i._RF.push({}, "37a26qVWwRHxr3EGj1gbUR2", "CalenderItem", void 0);
    const {
        ccclass: m,
        property: f
    } = l;
    t("default", (D = f(r), d = f(o), m((y = e((b = class extends a {
        constructor(...t) {
            super(...t), this.text = "", this.selectionStatus = !1, this.currentDate = null, this.monthCounter = null, n(this, "title", y, this), n(this, "buttonBG", S, this)
        }
        initialiseItemWithValue(t) {
            this.text = t.text, this.title.string = t.text, this.selectionStatus = t.selectionStatus, this.currentDate = t.date, this.buttonBG.node.active = t.selectionStatus;
            let e = t.cellType == p.Date ? .6 : 1;
            this.buttonBG.node.setScale(new s(e, e, e));
            var n = !1;
            this.currentDate && !this.selectionStatus && this.currentDate.toDateString() == (new Date).toDateString() && (t.cellType == p.Date ? n = this.currentDate.toDateString() == (new Date).toDateString() : t.cellType == p.Month ? n = this.currentDate.getMonth() == (new Date).getMonth() : t.cellType == p.Year && (n = this.currentDate.getFullYear() == (new Date).getFullYear())), this.selectionStatus && (this.title.node.getComponent(c).color = new u(0, 0, 0, 255)), n && (this.buttonBG.node.active = !1, this.title.node.getComponent(c).color = new u(100, 250, 50, 255)), this.title.node.getComponent(h).opacity = t.itemOpacity
        }
    }).prototype, "title", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = e(b.prototype, "buttonBG", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), g = b)) || g));
    i._RF.pop()
}