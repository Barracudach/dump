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
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as m from "./cv.js";
import * as y from "./TweenControl.js";

function main() {
    var _, f, b, z, S, w;
    o._RF.push({}, "e2302gn2z1K67jHsQUAW03t", "HumanboyFlutterScore", void 0);
    const {
        ccclass: v,
        property: x
    } = s;
    t("HumanboyFlutterScore", (_ = x(n), f = x(r), v((S = e((z = class extends a {
        constructor(...t) {
            super(...t), i(this, "img", S, this), i(this, "txt", w, this), this._img_src_size = new c(c.ZERO)
        }
        onLoad() {
            this._img_src_size = l(this.img.node.getContentSize())
        }
        start() {}
        _layout(t) {
            let e = l(80, 0),
                i = m.resMgr.getLabelStringSize(this.txt, t),
                o = Math.max(this._img_src_size.width, i.width + e.width),
                n = Math.max(this._img_src_size.height, i.height + e.height);
            this.img.node.getComponent(u).setContentSize(o, n), this.txt.node.setPosition(h(d.ZERO))
        }
        init(t) {
            this._layout(t)
        }
        show(t = !0) {
            if (this.node.active = !0, t) {
                let t = this.node.addOrGetComponent(p),
                    e = t.opacity;
                g(this.node).delay(1.3).by(1.5, {
                    position: h(0, 50, 0)
                }, {
                    easing: y.easeInOut(1),
                    onUpdate(i, o) {
                        t.opacity = e - e * o
                    }
                }).destroySelf().call((() => {
                    this.node.removeFromParent(), m.tools.destroyNode(this.node)
                })).start()
            }
        }
    }).prototype, "img", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = e(z.prototype, "txt", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), b = z)) || b));
    o._RF.pop()
}