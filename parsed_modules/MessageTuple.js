import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as p from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as c from "./TweenControl.js";

function main() {
    var u, d, h, g, m, y;
    o._RF.push({}, "53a318Jsn5IVKyaDD3j8+/c", "MessageTuple", void 0);
    const {
        ccclass: f,
        property: b
    } = s;
    e("MessageTuple", (u = b(i), d = b(r), f((m = t((g = class extends a {
        constructor(...e) {
            super(...e), n(this, "redDot", m, this), n(this, "timeLabel", y, this)
        }
        update(e) {
            let t = this.node.parent.parent.getComponent(l).height / 2,
                n = this.node.parent.position.y + this.node.position.y;
            n + this.node.getComponent(l).height < 3 * -t || n > t ? this.node.getComponent(p).opacity = 0 : this.node.getComponent(p).opacity = 255
        }
        setRedDot(e, t = !1) {
            let n = t ? .01 : .3;
            c.fade(this.redDot, e ? .01 : n, e ? 255 : 0)
        }
        setTime(e, t) {
            this.timeLabel.string = e + " " + t
        }
    }).prototype, "redDot", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = t(g.prototype, "timeLabel", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), h = g)) || h));
    o._RF.pop()
}