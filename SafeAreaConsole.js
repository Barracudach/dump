import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./rollupPluginModLoBabelHelpers.js";
import * as h from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as p from "./SafeAreaHelper.js";

function main() {
    var u, f, g, d, C, S;
    i._RF.push({}, "6c937aUcx1KDI8VrIGjCni+", "SafeAreaConsole", void 0);
    const {
        ccclass: _,
        property: b
    } = a;
    e("SafeAreaConsole", (u = b(o), f = b(s), _((C = t((d = class extends n {
        constructor(...e) {
            super(...e), r(this, "consoleInfo", C, this), r(this, "graphics", S, this)
        }
        start() {
            this.graphics.node.on(c.EventType.TOUCH_END, this._updateConsole, this), this._updateConsole()
        }
        _updateConsole() {
            this.consoleInfo.string = p.getAllInfo(), this._drawSafeAreaReact()
        }
        _drawSafeAreaReact() {
            const e = p.getSafeAreaRect(),
                t = l.getVisibleSize();
            this.graphics.clear(), this.graphics.rect(-t.width / 2 + e.x, -t.height / 2 + e.y, e.width, e.height), this.graphics.fillColor = h(241, 148, 138, 66), this.graphics.fill(), this.graphics.stroke()
        }
    }).prototype, "consoleInfo", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = t(d.prototype, "graphics", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), g = d)) || g));
    i._RF.pop()
}