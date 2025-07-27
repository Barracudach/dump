import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";

function main() {
    var N, u, h, l, a, y, v, p, C;
    s._RF.push({}, "f0c64N5uNlNl6i9BVcNsNFM", "NodeVisibleSync", void 0);
    const {
        ccclass: A,
        property: E
    } = n;
    e("NodeVisibleSync", (N = A("NodeVisibleSync"), u = E(i), h = E([i]), l = E(Boolean), N((v = o((y = class extends c {
        constructor(...e) {
            super(...e), t(this, "sourceNode", v, this), t(this, "syncNodes", p, this), t(this, "syncOnHideOnly", C, this)
        }
        onLoad() {
            this.setSourceNode(this.sourceNode ?? this.node), this.resetSyncNodeEvent()
        }
        onDestroy() {
            var e;
            null == (e = this.sourceNode) || e.off(r.ACTIVE_IN_HIERARCHY_CHANGED, this.onSourceNodeActiveChanged, this)
        }
        setSourceNode(e) {
            var o, t;
            d(this.sourceNode) && (null == (t = this.sourceNode) || t.off(r.ACTIVE_IN_HIERARCHY_CHANGED, this.onSourceNodeActiveChanged, this));
            this.sourceNode = e, null == (o = this.sourceNode) || o.on(r.ACTIVE_IN_HIERARCHY_CHANGED, this.onSourceNodeActiveChanged, this)
        }
        addSyncNode(e) {
            this.syncNodes.push(e), this.setupSyncNodeEvent(e), this.onSyncNodeActiveChanged(e)
        }
        onSourceNodeActiveChanged() {
            this.syncOnHideOnly && this.sourceNode.active || (this.syncNodes = this.syncNodes.filter((e => d(e))), this.syncNodes.forEach((e => {
                var o;
                return e.active = !(null == (o = this.sourceNode) || !o.active)
            })))
        }
        resetSyncNodeEvent() {
            this.syncNodes = this.syncNodes.filter((e => d(e))), this.syncNodes.forEach((e => {
                this.setupSyncNodeEvent(e)
            }))
        }
        setupSyncNodeEvent(e) {
            e.off(r.ACTIVE_IN_HIERARCHY_CHANGED, this.onSyncNodeActiveChanged, this), e.on(r.ACTIVE_IN_HIERARCHY_CHANGED, this.onSyncNodeActiveChanged, this)
        }
        onSyncNodeActiveChanged(e) {
            var o, t;
            this.syncOnHideOnly && null != (o = this.sourceNode) && o.active || (e.active = !(null == (t = this.sourceNode) || !t.active))
        }
    }).prototype, "sourceNode", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), p = o(y.prototype, "syncNodes", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), C = o(y.prototype, "syncOnHideOnly", [l], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), a = y)) || a));
    s._RF.pop()
}