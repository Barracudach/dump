import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as v from "./cc.js";
import * as a from "./cc.js";
import * as f from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as _ from "./cv.js";
import * as b from "./Enum.js";

function main() {
    var C, S, y, N, Y, w, m, T;
    s._RF.push({}, "2383egB/ntDSbBNXXndbW5L", "RefreshTop", void 0);
    const {
        ccclass: R,
        property: A
    } = h;
    t("default", (C = A(o), S = A(n), y = A(l), R((w = e((Y = class extends r {
        constructor(...t) {
            super(...t), i(this, "sv", w, this), i(this, "ndIcon", m, this), i(this, "slider", T, this), this._actionDuration = .25, this._defaultNodeX = void 0, this._defaultNodeY = void 0, this._defaultContentX = void 0, this._defaultContentY = void 0, this.refreshListener = void 0
        }
        onLoad() {
            this.updataNodePos(), this.sv.elastic = !0;
            var t = new r.EventHandler;
            t.target = this.node, t.component = "RefreshTop", t.handler = "onScrollEvent", this.sv.scrollEvents.push(t)
        }
        updataNodePos() {
            this._defaultNodeX = this.node.position.x, this._defaultNodeY = this.node.position.y, this._defaultContentX = this.sv.content.position.x, _.config.IS_FULLSCREEN ? this._defaultContentY = this._defaultNodeY - this.node.getComponent(a).contentSize.height / 2 : this._defaultContentY = this.node.getParent().getComponent(a).height * (1 - this.node.getParent().getComponent(a).anchorY), this.resetUI()
        }
        onEnable() {
            this.resetUI()
        }
        onDisable() {
            this.isRefreshAtDefaultY() || (this.node.position = new d(this.node.position.x, this._defaultNodeY, this.node.position.z), this.updataNodePos())
        }
        isRefreshAtDefaultY() {
            return this.node.position.y == this._defaultNodeY
        }
        resetUI() {
            this.clearActions(), this.enableScrolling(!0), this.ndIcon.angle = 0, this.node.position = new d(this.node.position.x, this._defaultNodeY, this.node.position.z), this.sv.content.position = new d(this.sv.content.position.x, this._defaultContentY, this.sv.content.position.z), this.sv.elastic = !0, this.sv.scrollTo(new c(0, 1), .01)
        }
        onScrollEvent(t, e, i) {
            let s = t.getScrollOffset().y;
            if (e == b.SCROLLING) {
                if (s >= 0 && s <= t.getMaxScrollOffset().y ? t.elastic = !t.isAutoScrolling() : t.elastic = !0, s > 0) return;
                this.node.position = new d(this.node.position.x, this._defaultNodeY + s, this.node.position.z), this.ndIcon.angle = -360 * Math.abs(s) / this.node.getComponent(a).height
            } else e == b.BOUNCE_TOP ? Math.abs(s) >= this.node.getComponent(a).height && this.showRefresh() : e == b.BOUNCE_BOTTOM && s > t.getMaxScrollOffset().y && (this.sv.vertical = !1, this.clearActions(), this.sv.scrollToOffset(u(0, t.getMaxScrollOffset().y)), f(this.sv.content).delay(.1).call((() => {
                this.sv.vertical = !0
            })).start())
        }
        showRefresh() {
            this.enableScrolling(!1), this.clearActions(), f(this.ndIcon).by(1, {
                angle: 360
            }).repeatForever().start(), f(this.node).to(this._actionDuration, {
                position: p(this._defaultNodeX, this._defaultNodeY - this.node.getComponent(a).height)
            }).start(), f(this.sv.content).to(this._actionDuration, {
                position: p(this._defaultContentX, this._defaultContentY - this.node.getComponent(a).height)
            }).call((() => {
                this.refreshListener && this.refreshListener()
            })).start()
        }
        hideRefresh(t) {
            if (this.isRefreshAtDefaultY() && this.sv.getScrollOffset().y >= 0 || this.sv.content.position.y > this._defaultContentY) return this.enableScrolling(!0), void(t && t());
            this.clearActions(), f(this.node).to(this._actionDuration, {
                position: p(this._defaultNodeX, this._defaultNodeY, this.node.getPosition().z)
            }).start(), f(this.sv.content).to(this._actionDuration, {
                position: p(this._defaultContentX, this._defaultContentY, this.sv.content.getPosition().z)
            }).call((() => {
                this.enableScrolling(!0), this.sv.scrollTo(new c(0, 1), .01), t && t()
            })).start()
        }
        enableScrolling(t) {
            v(this.slider, !0) && (this.slider.enabled = t), this.sv.vertical = t
        }
        clearActions() {
            g.stopAllByTarget(this.ndIcon), g.stopAllByTarget(this.node), g.stopAllByTarget(this.sv.content), this.sv.stopAutoScroll()
        }
        setRefreshListener(t) {
            this.refreshListener = t
        }
    }).prototype, "sv", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), m = e(Y.prototype, "ndIcon", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = e(Y.prototype, "slider", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = Y)) || N));
    s._RF.pop()
}