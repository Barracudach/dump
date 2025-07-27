import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";

function main() {
    var h, a, u, p, d;
    n._RF.push({}, "fd332ktmyVAoLSoOz79Zksg", "CancelInnerTouch", void 0);
    const {
        ccclass: T,
        property: _
    } = i;
    o("CancelInnerTouch", (h = T("CancelInnerTouch"), a = _([s]), h((d = t((p = class extends r {
        constructor(...o) {
            super(...o), e(this, "targets", d, this)
        }
        onLoad() {
            this.node.on(c.TOUCH_START, this._onTouchBegan, this, !0), this.node.on(c.TOUCH_MOVE, this._onTouchMoved, this, !0), this.node.on(c.TOUCH_END, this._onTouchEnded, this, !0)
        }
        onDestroy() {
            this.node.off(c.TOUCH_START, this._onTouchBegan, this, !0), this.node.off(c.TOUCH_MOVE, this._onTouchMoved, this, !0), this.node.off(c.TOUCH_END, this._onTouchEnded, this, !0)
        }
        _onTouchBegan(o) {
            this._stopPropagation(o)
        }
        _onTouchMoved(o) {
            this._stopPropagation(o)
        }
        _onTouchEnded(o) {
            this._stopPropagation(o)
        }
        _stopPropagation(o) {
            this.targets.includes(o.target) && (this.targets.forEach((t => {
                o.currentTarget = t, t.emit(o.type, o)
            })), o.propagationStopped = !0)
        }
    }).prototype, "targets", [a], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), u = p)) || u));
    n._RF.pop()
}