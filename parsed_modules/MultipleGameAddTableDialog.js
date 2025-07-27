import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";

function main() {
    var r, a, p, u;
    o._RF.push({}, "c702dgPBNlKF72ZxTlxAW4m", "MultipleGameAddTableDialog", void 0);
    const {
        ccclass: h,
        property: d
    } = l;
    i("default", (r = d(n), h((u = t((p = class extends c {
        constructor(...i) {
            super(...i), e(this, "blocker", u, this), this._onClickAction = null
        }
        start() {}
        playAnimation(i) {
            let t = this.node.getComponent(s);
            t.play(t.clips[i].name)
        }
        show(i) {
            this.blocker.active = !1, this._onClickAction = i, this.playAnimation(0)
        }
        hide() {
            isValid(this.blocker, !0) && (this.blocker.active = !0), this.playAnimation(1)
        }
        onShow() {}
        onHide() {
            this.node.destroy()
        }
        onClick() {
            this._onClickAction && this._onClickAction instanceof Function && this._onClickAction(), this.hide()
        }
    }).prototype, "blocker", [r], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), a = p)) || a));
    o._RF.pop()
}