import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as i from "./cc.js";
import * as r from "./cc.js";
import * as a from "./cc.js";
import * as s from "./cv.js";
import * as l from "./observer.js";
import * as u from "./Holdem_Player_ts.js";

function main() {
    var c, y, p, d, h, f, b, g, L, _, w, m, v, z, D;
    i._RF.push({}, "162bcVYdkdEjopNKoCJvzQy", "Holdem_PlayerLayoutHandler_ts", void 0);
    const {
        ccclass: H,
        property: P
    } = n;
    let x = (c = H("LayoutData"), y = P({
        type: u
    }), p = P(a), d = P(a), c((b = e((f = class {
        constructor() {
            o(this, "layout", b, this), o(this, "position", g, this), o(this, "scale", L, this), o(this, "rotation", _, this)
        }
    }).prototype, "layout", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return u.Left
        }
    }), g = e(f.prototype, "position", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new a(0, 0, 1)
        }
    }), L = e(f.prototype, "scale", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return new a(1, 1, 1)
        }
    }), _ = e(f.prototype, "rotation", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), h = f)) || h);
    t("Holdem_PlayerLayoutHandler", (w = P([x]), m = P({
        type: u
    }), H(v = l((D = e((z = class extends r {
        constructor(...t) {
            super(...t), o(this, "datas", D, this), this._layout = u.Left
        }
        get layout() {
            return this._layout
        }
        set layout(t) {
            this.saveLayout(), this._layout = t, this.loadLayout()
        }
        saveLayout() {
            let t = this.getData(this.layout);
            t.position = new a(this.node.position), t.rotation = -this.node.angle, t.scale = new a(this.node.scale.x, this.node.scale.y, this.node.scale.z)
        }
        loadLayout() {
            if (s.appConfig.isLandscapeLayout) return;
            let t = this.getData(this.layout);
            this.node.position = new a(t.position), this.node.angle = -t.rotation, this.node.scale = new a(t.scale.x, t.scale.y, t.scale.z)
        }
        getData(t) {
            let e = this.datas.find((e => e.layout == t));
            if (!e) {
                e = new x, e.layout = t;
                let o = this.datas.find((t => t.layout == u.Left));
                o && (e.position = o.position, e.rotation = o.rotation, e.scale = o.scale), this.datas.push(e)
            }
            return e
        }
    }).prototype, "datas", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), e(z.prototype, "layout", [m], Object.getOwnPropertyDescriptor(z.prototype, "layout"), z.prototype), v = z)) || v) || v));
    i._RF.pop()
}