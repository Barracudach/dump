import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as y from "./NodeHelper.js";

function main() {
    var l, p, u, d, a, C;
    n._RF.push({}, "82991Q9fg1KrblfTuDTFATq", "NodeColorSync", void 0);
    const {
        ccclass: _,
        property: W,
        executeInEditMode: f,
        menu: g
    } = s;
    t("NodeColorSync", (l = g("Custom UI/Node Color Sync"), p = W({
        type: o,
        serializable: !0,
        visible: !1
    }), u = W({
        type: o,
        tooltip: "Set the Node with which to synchronize the color"
    }), _(d = f(d = l((C = e((a = class extends r {
        constructor(...t) {
            super(...t), i(this, "_syncWith", C, this)
        }
        get syncWith() {
            return this._syncWith
        }
        set syncWith(t) {
            !1 === y.equal(this._syncWith, t) && (this.uninit(), this._syncWith = t, this.init())
        }
        onLoad() {
            this.init()
        }
        onDestroy() {
            this.uninit()
        }
        init() {
            c(this._syncWith) && (this._syncWith.on(o.EventType.COLOR_CHANGED, this.syncColor.bind(this), this.node), this.syncColor())
        }
        uninit() {
            c(this._syncWith) && this._syncWith.off(o.EventType.COLOR_CHANGED, this.syncColor.bind(this), this.node)
        }
        syncColor() {
            c(this._syncWith) && this.node.getComponent(h) && this._syncWith.getComponent(h) && (this.node.getComponent(h).color = this._syncWith.getComponent(h).color)
        }
    }).prototype, "_syncWith", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), e(a.prototype, "syncWith", [u], Object.getOwnPropertyDescriptor(a.prototype, "syncWith"), a.prototype), d = a)) || d) || d) || d));
    n._RF.pop()
}