import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as _ from "./mttconfig.js";

function main() {
    var m, u, d, g, C, p;
    i._RF.push({}, "beb7bB78upMZIEK0WR1PAzM", "ConnectionLine", void 0);
    const {
        ccclass: f,
        property: b
    } = c;
    t("default", (m = b(s), u = b(o), f((C = e((g = class extends r {
        constructor(...t) {
            super(...t), n(this, "container", C, this), n(this, "backButton", p, this), this._prefab = null, this._index = -1, this._items = [], this._reconnectMode = !1, this._reconnectTimeout = null, this._startTime = 0, this.onCreatePrefab = (t, e) => {
                try {
                    t && cc_mtt.vv.ConsoleLog.error("CL", t), this._prefab = e, this.createChild(), this.connect()
                } catch (t) {
                    cc_mtt.vv.ConsoleLog.error("CL", t)
                }
            }, this.connectNext = () => {
                try {
                    this._index++, this._index < this._items.length ? this._items[this._index].hasConnected ? this._reconnectMode && this.getConnectedCount() < Math.min(2, this._items.length) && this.connectNext() : this._items[this._index].setInfo(this.connectNext) : this.getConnectedCount() < 2 && (this._reconnectTimeout = setTimeout((() => {
                        this.reconnect()
                    }), 1e3))
                } catch (t) {
                    cc_mtt.vv.ConsoleLog.error("CL", t)
                }
            }
        }
        start() {
            this._startTime = (new Date).getTime(), cc_mtt.vv.AssetsManager.loadRes("connection_line/connection_line_item", h, this.onCreatePrefab)
        }
        onDestroy() {
            clearTimeout(this._reconnectTimeout)
        }
        createChild() {
            for (let t = this._items.length; t < _.SERVER_URL_WORLD_TEXT.length; t++) {
                let e = a(this._prefab);
                e.parent = this.container;
                let n = e.getComponent("ConnectionLineItem");
                n && (n.name = t.toString(), this._items.push(n))
            }
        }
        getConnectedCount() {
            let t = 0;
            for (let e = 0; e < this._items.length; e++) this._items[e] && this._items[e].hasConnected && t++;
            return t
        }
        selectItem(t) {
            for (let t = 0; t < this._items.length; t++) this._items[t] && this._items[t].setSelected(!1);
            t < this._items.length && this._items[t] && this._items[t].setSelected(!0)
        }
        reconnect() {
            this._reconnectMode = !0, this.connect()
        }
        connect() {
            this._index = -1, this.connectNext()
        }
        onBackClick() {
            try {
                (new Date).getTime() - this._startTime > 500 && (l.stopAllByTarget(this.node), this.node.destroy(), this.destroy())
            } catch (t) {
                cc_mtt.vv.ConsoleLog.error("CL", t)
            }
        }
    }).prototype, "container", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), p = e(g.prototype, "backButton", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), d = g)) || d));
    i._RF.pop()
}