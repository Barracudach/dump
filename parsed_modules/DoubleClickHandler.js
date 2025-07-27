import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";

function main() {
    var a, u, h, d;
    l._RF.push({}, "c582dCHQWhO6Y6cREC5F0/j", "DoubleClickHandler", void 0);
    const {
        ccclass: C,
        property: k
    } = o;
    e("DoubleClickHandler", (a = k({
        type: [n.EventHandler]
    }), C((d = t((h = class extends n {
        constructor(...e) {
            super(...e), i(this, "doubleClickEvents", d, this), this._doubleClickTimeMax = 500, this._lastClickTime = 0
        }
        getEvent() {
            return s.EventType.MOUSE_UP
        }
        onEnable() {
            this.node.on(this.getEvent(), this.onClick, this)
        }
        onDisable() {
            this.node.off(this.getEvent(), this.onClick, this)
        }
        GetMaxTimeMiliSeconds() {
            return this._doubleClickTimeMax
        }
        onClick(e) {
            if (e.getButton() != c.BUTTON_LEFT) return;
            let t = r.getTotalTime(),
                i = t - this._lastClickTime;
            this._lastClickTime = t, i <= this._doubleClickTimeMax && (this._lastClickTime = 0, this.doubleClickEvents.forEach((e => e.emit([e.customEventData]))))
        }
    }).prototype, "doubleClickEvents", [a], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), u = h)) || u));
    l._RF.pop()
}