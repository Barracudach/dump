import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as u from "./Translator.js";
import * as f from "./CommonTools.js";

function main() {
    var w, y, m, v, b, L, V, C, _, T;
    o._RF.push({}, "9e896XNQ75Ps6mYxL3iuTvG", "ListLoader", void 0);
    const {
        ccclass: A,
        property: D
    } = n;
    e("ListLoader", (w = D(l), y = D(s), m = D(l), v = D(r), A((V = t((L = class extends a {
        constructor(...e) {
            super(...e), i(this, "loader", V, this), i(this, "scrollView", C, this), i(this, "blockLayer", _, this), i(this, "loaderMessage", T, this), this.tupleHeight = 1, this.resetRoAction = null, this._loaderDeprecated = !1, this._loaderUpdate = !0
        }
        onDestroy() {
            this.unscheduleAllCallbacks()
        }
        onLoad() {
            this.resetRoAction = c(this.loader).to(.2, {
                angle: 0
            }, {
                onUpdate(e, t) {
                    e.getComponent(h).opacity = 255 - 255 * t
                }
            }), this.loader.getComponent(h).opacity = 0, this.loader.angle = 0
        }
        update(e) {
            if (this._loaderDeprecated || !this._loaderUpdate) return;
            let t = this.scrollView.content.getComponent(d).height - this.scrollView.node.getComponent(d).height;
            if (this.scrollView.getScrollOffset().y >= t && t > 0) {
                let e = (this.scrollView.getScrollOffset().y - t) / (1.5 * this.tupleHeight);
                this.loader.angle = f.instance.rotationToAngle(180 * e), this.loader.getComponent(h).opacity = 255 * Math.min(1, e)
            } else 0 == this.loader.angle && 0 == this.loader.getComponent(h).opacity || this.resetRoAction.start()
        }
        setNeedLoader(e) {
            this._loaderDeprecated = !e
        }
        initExtendLoader(e) {
            this.tupleHeight = this.loader.getComponent(d).height + 54, this.loaderMessage.node.active && (this.loaderMessage.node.active = !1);
            const t = () => {
                if (this._loaderDeprecated) return;
                let t = this.scrollView.content.getComponent(d).height - this.scrollView.node.getComponent(d).height,
                    i = t + 1.8 * this.tupleHeight;
                if (this.scrollView.getScrollOffset().y >= i && t > 0)
                    if (this.blockLayer.active = !0, this.scrollView.getScrollOffset().y >= t) {
                        this.scrollView.vertical = !1;
                        let i = c().by(.35, {
                                angle: 360
                            }),
                            o = c().to(.2, {
                                position: g(0, t + this.scrollView.node.getComponent(d).height / 2)
                            });
                        const l = () => {
                                this.scrollView.vertical = !0, p.stopAllByTarget(this.loader), this.unscheduleAllCallbacks(), this.blockLayer.active = !1
                            },
                            s = (e = !1, t = !1) => {
                                e ? (cc_mtt.vv.ConsoleLog.log("no needed"), this.scheduleOnce(l, .2)) : (cc_mtt.vv.ConsoleLog.log("equal"), t ? (this.loaderMessage.string = u("LOADER.DATA_FAILED"), this.loaderMessage.node.active = !0, this.scheduleOnce((() => {
                                    o.target(this.scrollView.content).call((() => {
                                        this.loaderMessage.node.active = !1, l()
                                    })).start()
                                }), 1.5)) : o.target(this.scrollView.content).call((() => {
                                    l()
                                })).start())
                            };
                        c(this.scrollView.content).to(.2, {
                            position: g(0, t + this.scrollView.node.getComponent(d).height / 2 + this.tupleHeight, 0)
                        }).call((() => {
                            i.target(this.loader).start(), e(s)
                        })).start()
                    } else this.loader.active = !1, this.blockLayer.active = !1, 0 == this.scrollView.vertical && (this.scrollView.vertical = !0)
            };
            this.scrollView.node.on(l.EventType.TOUCH_CANCEL, (() => {
                t()
            }), this), this.scrollView.node.on(s.EventType.TOUCH_UP, (() => {
                t()
            }), this)
        }
    }).prototype, "loader", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = t(L.prototype, "scrollView", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = t(L.prototype, "blockLayer", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = t(L.prototype, "loaderMessage", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), b = L)) || b));
    o._RF.pop()
}