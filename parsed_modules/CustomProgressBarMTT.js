import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as e from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";

function main() {
    var h, b, g, d, f, P, m, y, _, x;
    e._RF.push({}, "acc9072Xm9KEZTSgE87yCxS", "CustomProgressBarMTT", void 0);
    const {
        ccclass: w,
        property: z
    } = a;
    t("default", (h = z(o), b = z(n), g = z(s), d = z(s), w((m = i((P = class extends u {
        constructor(...t) {
            super(...t), r(this, "bar", m, this), r(this, "button", y, this), r(this, "startPoint", _, this), r(this, "endPoint", x, this), this._progress = void 0
        }
        get _maxWidth() {
            return Math.abs(this.endPoint.position.x - this.startPoint.position.x)
        }
        set progress(t) {
            this.setProgress(t)
        }
        get progress() {
            return this._progress
        }
        onLoad() {}
        start() {}
        setProgress(t) {
            this._progress = t;
            let i = t * this._maxWidth;
            this.bar.node.getComponent(l).width = i, p(this.button) && (this.button.node.position = new c(this.startPoint.position.x + i, this.startPoint.position.y, this.startPoint.position.z))
        }
    }).prototype, "bar", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = i(P.prototype, "button", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = i(P.prototype, "startPoint", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = i(P.prototype, "endPoint", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = P)) || f));
    e._RF.pop()
}