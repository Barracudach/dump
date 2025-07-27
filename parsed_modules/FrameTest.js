import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as _ from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as f from "./cc.js";
import * as m from "./cc.js";
import * as b from "./cc.js";
import * as p from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as T from "./CustomToggle.js";
import * as w from "./TweenControl.js";

function main() {
    var v, y, C, z, E, x, A, D, F, I, k, G, S, L, N, M, P, R, B, O;
    i._RF.push({}, "485c36APeBLj4n+gCRnqFpe", "FrameTest", void 0);
    const {
        ccclass: j,
        property: q
    } = c;
    e("FrameTest", (v = q(o), y = q(r), C = q(l), z = q(l), E = q(a), x = q(a), A = q(s), D = q(T), F = q(T), j((G = t((k = class extends h {
        constructor(...e) {
            super(...e), n(this, "node_content", G, this), n(this, "txt_count", S, this), n(this, "edt_row", L, this), n(this, "edt_col", N, this), n(this, "prefa_coin_1", M, this), n(this, "prefa_coin_2", P, this), n(this, "coin_frame", R, this), n(this, "vToggle", B, this), n(this, "toggle_act", O, this)
        }
        onLoad() {
            this.toggle_act.node.on(g.EventType.TOGGLE, this._onToggleAct, this);
            for (let e = 0; e < this.vToggle.length; ++e) this.vToggle[e].node.on(g.EventType.TOGGLE, (t => {
                this._onToggleEvent(t, e)
            }), this);
            this.edt_row.node.on(l.EventType.EDITING_DID_BEGAN, (e => {
                this.toggle_act.uncheck();
                for (let e = 0; e < this.vToggle.length; ++e) this.vToggle[e].isChecked = !1
            })), this.edt_col.node.on(l.EventType.EDITING_DID_BEGAN, (e => {
                this.toggle_act.uncheck();
                for (let e = 0; e < this.vToggle.length; ++e) this.vToggle[e].isChecked = !1
            }))
        }
        start() {}
        _onToggleAct(e) {
            this._generateAction(e.isChecked)
        }
        _onToggleEvent(e, t) {
            this.node_content.removeAllChildren();
            for (let e = 0; e < this.node_content.children.length; ++e) this.node_content.children[e].destroy();
            let n = Number(this.edt_row.string),
                i = Number(this.edt_col.string);
            n = Math.max(n, 1), i = Math.max(i, 1), this._generateCoin(t, n, i)
        }
        _generateCoin(e, t, n) {
            let i = null;
            switch (e) {
                case 0:
                    this.prefa_coin_1.data.width, this.prefa_coin_1.data.height, i = _(this.prefa_coin_1);
                    break;
                case 1:
                    this.prefa_coin_2.data.width, this.prefa_coin_2.data.height, i = _(this.prefa_coin_2);
                    break;
                case 2: {
                    this.coin_frame.getRect().width, this.coin_frame.getRect().height, i = new o;
                    let e = i.addComponent(u);
                    e.type = u.Type.SIMPLE, e.sizeMode = u.SizeMode.RAW, e.trim = !1, e.spriteFrame = this.coin_frame
                }
            }
            let r = p.getVisibleSize().width / (n + 1),
                l = p.getVisibleSize().height / (t + 1),
                a = -this.node.getComponent(d).width * this.node.getComponent(d).anchorX,
                s = this.node.getComponent(d).height * this.node.getComponent(d).anchorY;
            for (let e = 0; e < t; ++e)
                for (let t = 0; t < n; ++t) {
                    let n = a + r * (t + 1),
                        o = s - l * (e + 1),
                        c = _(i);
                    c.setPosition(n, o), this.node_content.addChild(c)
                }
            this.txt_count.string = "同屏数量: " + n * t
        }
        _generateAction(e) {
            for (let t = 0; t < this.node_content.children.length; ++t) {
                let n = this.node_content.children[t];
                w.stopAll(n), n.setScale(f(1, 1, 1)), e && b(n).sequence(b().to(.5, {
                    scale: f(.8, .8)
                }, {
                    easing: m.expoIn
                }), b().to(.5, {
                    scale: f(1.2, 1.2)
                }, {
                    easing: m.expoOut
                })).repeatForever().start()
            }
        }
    }).prototype, "node_content", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = t(k.prototype, "txt_count", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = t(k.prototype, "edt_row", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = t(k.prototype, "edt_col", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = t(k.prototype, "prefa_coin_1", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = t(k.prototype, "prefa_coin_2", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = t(k.prototype, "coin_frame", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = t(k.prototype, "vToggle", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), O = t(k.prototype, "toggle_act", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = k)) || I));
    i._RF.pop()
}