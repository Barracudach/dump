import * as d from "./cc.js";
import * as h from "./cc.js";
import * as e from "./cc.js";
import * as r from "./cc.js";
import * as _ from "./cc.js";
import * as s from "./cc.js";
import * as E from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as f from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as c from "./NodeTools.js";

function main() {
    var N, p;
    e._RF.push({}, "4bfc0YQsHBN3ZIoHRA+ZE5p", "FPSInfo", void 0);
    const {
        deviceManager: g
    } = d, {
        ccclass: F,
        property: T
    } = s;
    t("default", F(((p = class t extends o {
        constructor(...t) {
            super(...t), this._rootNode = null, this._label = {
                left: null,
                right: null
            }, this._stats = {
                fps: {
                    desc: "Framerate (FPS)",
                    value: 0,
                    average: 500,
                    start: 0,
                    accumValue: 0,
                    accumSamples: 0
                },
                draws: {
                    desc: "Draw Call",
                    value: 0
                }
            }, this._totalFrames = 0, this._showFPS = !1
        }
        static get instance() {
            return t._instance || (t._instance = new t), t._instance
        }
        generateNode() {
            if (null == this._rootNode) {
                this._rootNode = a.getScene().getChildByName("MY-PROFILER-NODE");
                let t = a.getScene().getChildByName("PROFILER-NODE");
                t && (c.changeNodeColor(t.getChildByName("LEFT-PANEL"), new n(255, 255, 0)), c.changeNodeColor(t.getChildByName("RIGHT-PANEL"), new n(255, 255, 0)))
            }
            if (this._rootNode && i(this._rootNode, !0)) return;
            let t = new r("MY-PROFILER-NODE");
            t.setPosition(10, 200), a.addPersistRootNode(t), t.addComponent(h), t.setSiblingIndex(999999999);
            let e = new r("LEFT-PANEL"),
                s = e.getComponent(l);
            s.anchorX = 0, s.anchorY = 0, c.changeNodeColor(e, new n(255, 0, 0));
            let o = e.addComponent(_);
            o.fontSize = 32, o.lineHeight = 32, e.parent = t;
            let E = new r("RIGHT-PANEL"),
                f = E.getComponent(l);
            f.anchorX = 1, f.anchorY = 0, E.setPosition(300, E.position.y), c.changeNodeColor(E, new n(255, 0, 0));
            let d = E.addComponent(_);
            d.horizontalAlign = _.HorizontalAlign.RIGHT, d.fontSize = 32, d.lineHeight = 32, E.parent = t;
            let N = {
                left: o,
                right: d
            };
            this._rootNode = t, this._label = N
        }
        showStats() {
            this._showFPS || (this.generateStats(), this._rootNode && (this._rootNode.active = !0), E("FPSInfo:: showStats"), console.log("FPSInfo:: showStats"), a.on(f.EVENT_BEFORE_UPDATE, this.beforeUpdate, this), a.on(f.EVENT_AFTER_UPDATE, this.afterUpdate, this), a.on(f.EVENT_AFTER_DRAW, this.afterDraw, this), this._showFPS = !0)
        }
        hideStats() {
            this._showFPS && (this._rootNode && (this._rootNode.active = !1), a.off(f.EVENT_BEFORE_UPDATE, this.beforeUpdate, this), a.off(f.EVENT_AFTER_UPDATE, this.afterUpdate, this), a.off(f.EVENT_AFTER_DRAW, this.afterDraw), this._showFPS = !1)
        }
        onLoad() {
            E("FPSInfo:: onLoad"), a.on(f.EVENT_BEFORE_UPDATE, this.beforeUpdate, this), a.on(f.EVENT_AFTER_UPDATE, this.afterUpdate, this), a.on(f.EVENT_AFTER_DRAW, this.afterDraw, this)
        }
        onEnable() {
            E("FPSInfo:: onEnable")
        }
        onDisable() {
            E("FPSInfo:: onDisable")
        }
        onDestroy() {
            a.off(f.EVENT_BEFORE_UPDATE, this.beforeUpdate, this), a.off(f.EVENT_AFTER_UPDATE, this.afterUpdate, this), a.off(f.EVENT_AFTER_DRAW, this.afterDraw)
        }
        beforeUpdate() {
            this.generateNode()
        }
        afterUpdate() {}
        afterDraw() {
            var t;
            let e = performance.now();
            this._stats.draws.value = null == g || null == (t = g.gfxDevice) ? void 0 : t.numDrawCalls, this._totalFrames++, e - this._stats.fps.start > this._stats.fps.average && (this._stats.fps.start = e, this._stats.fps.value = 1e3 * this._totalFrames / this._stats.fps.average, this._totalFrames = 0);
            let s = "",
                o = "";
            for (let t in this._stats) {
                let e = this._stats[t];
                s += e.desc + "\n", o += e.value + "\n"
            }
            this._label && (this._label.left.string = s, this._label.right.string = o)
        }
        generateStats() {
            this._stats.fps.start = performance.now()
        }
        start() {
            this._stats.fps.start = performance.now()
        }
    })._instance = null, N = p)) || N);
    e._RF.pop()
}