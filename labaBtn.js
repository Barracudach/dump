import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as s from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as p from "./cv.js";
import * as g from "./TweenControl.js";

function main() {
    var b, d, m, f, y, v, P, A, C, w, S, _, k, H, D, N;
    i._RF.push({}, "c34b3IpAXhH2aWwJexVbRX1", "labaBtn", void 0);
    const {
        ccclass: T,
        property: I
    } = o;
    t("default", (b = I(r), d = I(a), m = I(n), f = I(n), y = I(n), v = I(n), P = I(l), T((w = e((C = class extends h {
        constructor(...t) {
            super(...t), s(this, "num", w, this), s(this, "img_circle", S, this), s(this, "bg", _, this), s(this, "copper", k, this), s(this, "silver", H, this), s(this, "golden", D, this), s(this, "plus", N, this), this.startPrograss = 0, this.endPrograss = 0
        }
        start() {
            this.plus.node.active = !1
        }
        updateLabaNum(t) {
            let e = p.dataHandler.getUserData().hand_num;
            p.Number(this.num.string) == e && (t = !1);
            let s = p.dataHandler.getUserData().playerHands,
                i = [s[0], s[1], s[2]];
            if (t) {
                this.plus.node.active = !0;
                let t = this.plus.getState(this.plus.defaultClip.name);
                if (t && t.isPlaying) return;
                this.plus.play(), this.plus.on(l.EventType.FINISHED, (t => {
                    switch (this.plus.off(l.EventType.FINISHED), this.setNumAndCircle(!0), e) {
                        case 1:
                            255 == this.golden.getComponent(c).opacity && 1 == this.golden.active && this.runAc(this.golden, this.bg);
                            break;
                        case i[0]:
                            this.runAc(this.bg, this.copper);
                            break;
                        case i[0] + 1:
                            this.runAc(this.copper, this.bg);
                            break;
                        case i[1]:
                            this.runAc(this.bg, this.silver);
                            break;
                        case i[1] + 1:
                            this.runAc(this.silver, this.bg);
                            break;
                        case i[2]:
                            this.runAc(this.bg, this.golden)
                    }
                }), this)
            } else switch (this.setNumAndCircle(!1), u.stopAllByTarget(this.bg), u.stopAllByTarget(this.copper), u.stopAllByTarget(this.silver), u.stopAllByTarget(this.golden), this.plus.stop(), this.plus.off(l.EventType.FINISHED), this.plus.node.active = !1, e) {
                case 1:
                    255 == this.golden.getComponent(c).opacity && 1 == this.golden.active && this.setState(this.golden, this.bg);
                    break;
                case i[0]:
                    this.setState(this.bg, this.copper);
                    break;
                case i[0] + 1:
                    this.setState(this.copper, this.bg);
                    break;
                case i[1]:
                    this.setState(this.bg, this.silver);
                    break;
                case i[1] + 1:
                    this.setState(this.silver, this.bg);
                    break;
                case i[2]:
                    this.setState(this.bg, this.golden)
            }
        }
        runAc(t, e) {
            t.active = !1, e.getComponent(c).opacity = 0, e.active = !0, g.fadeIn(e, .3)
        }
        setState(t, e) {
            t.active = !1, e.active = !0, e.getComponent(c).opacity = 255
        }
        setNumAndCircle(t) {
            let e = p.dataHandler.getUserData().hand_num,
                s = p.dataHandler.getUserData().getPlayerHands();
            this.startPrograss = p.Number(this.num.string) / s, this.endPrograss = e / s, this.startPrograss > this.endPrograss && (this.startPrograss = 0), this.img_circle.progress = this.startPrograss, this.num.string = p.String(e), this.unschedule(this.updateCircle), t ? this.schedule(this.updateCircle, 1 / 60) : this.img_circle.progress = this.endPrograss
        }
        updateCircle(t) {
            this.img_circle.progress >= this.endPrograss ? this.unschedule(this.updateCircle) : this.img_circle.progress += (this.endPrograss - this.startPrograss) / 60
        }
    }).prototype, "num", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = e(C.prototype, "img_circle", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = e(C.prototype, "bg", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = e(C.prototype, "copper", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = e(C.prototype, "silver", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = e(C.prototype, "golden", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = e(C.prototype, "plus", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = C)) || A));
    i._RF.pop()
}