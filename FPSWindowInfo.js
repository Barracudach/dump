import * as e from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as h from "./NodeTools.js";

function main() {
    var u;
    s._RF.push({}, "bf32eaBul9NsZNDiCZ+JDeb", "FPSWindowInfo", void 0);
    const {
        ccclass: m,
        property: f
    } = c;
    t("default", m(u = class extends e {
        constructor(...t) {
            super(...t), this._rootNode = null, this._label = {
                left: null,
                right: null
            }, this._stats = {
                version: {
                    desc: "Version",
                    value: 1
                },
                fps: {
                    desc: "Framerate (FPS)",
                    value: 0,
                    average: 500,
                    start: 0,
                    accumValue: 0,
                    accumSamples: 0
                },
                frame: {
                    desc: "Frame time (ms)",
                    value: 0,
                    average: 500,
                    accumValue: 0,
                    accumSamples: 0
                }
            }, this._totalFrames = 0, this._showFPS = !1
        }
        onLoad() {
            this.generateNode()
        }
        start() {}
        update(t) {
            if (this._stats.frame.accumValue += 1e3 * t, this._stats.frame.accumSamples++, this._stats.frame.accumValue > this._stats.frame.average && (this._stats.frame.value = Math.floor(this._stats.frame.accumValue / this._stats.frame.accumSamples), this._stats.frame.accumValue = 0, this._stats.frame.accumSamples = 0), this._stats.fps.accumValue += 1 / t, this._stats.fps.accumSamples++, this._stats.fps.start += 1e3 * t, this._stats.fps.start > this._stats.fps.average) {
                this._stats.fps.value = Math.floor(this._stats.fps.accumValue / this._stats.fps.accumSamples), this._stats.fps.start = 0, this._stats.fps.accumValue = 0, this._stats.fps.accumSamples = 0;
                let t = "",
                    s = "";
                for (let e in this._stats) {
                    let a = this._stats[e];
                    t += a.desc + "\n", s += a.value + "\n"
                }
                this._label && (this._label.left.string = t, this._label.right.string = s)
            }
        }
        generateNode() {
            let t = new a("WINDOW-PROFILER-NODE");
            t.setPosition(-1100, -500), o.addPersistRootNode(t), t.addComponent(i), t.setSiblingIndex(999999999);
            let s = new a("LEFT-PANEL"),
                e = s.getComponent(l);
            e.anchorX = e.anchorY = 0, h.changeNodeColor(s, new n(253, 132, 31));
            let c = s.addComponent(r);
            c.fontSize = 32, c.lineHeight = 32, s.parent = t;
            let u = new a("RIGHT-PANEL"),
                m = u.getComponent(l);
            m.anchorX = 1, m.anchorY = 0, u.setPosition(300, u.position.y), h.changeNodeColor(u, new n(253, 132, 31));
            let f = u.addComponent(r);
            f.horizontalAlign = r.HorizontalAlign.RIGHT, f.fontSize = 32, f.lineHeight = 32, u.parent = t;
            let d = {
                left: c,
                right: f
            };
            this._rootNode = t, this._label = d, this.node.addChild(this._rootNode)
        }
    }) || u);
    s._RF.pop()
}