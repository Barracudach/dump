import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
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
import * as d from "./CommonTools.js";

function main() {
    var S, T, A, y, m, w, f, b, v, C;
    s._RF.push({}, "d3b014tsYhN7ahXTAH6F6as", "SlideStepsView", void 0);
    const {
        ccclass: E,
        property: P
    } = o;
    t("SlideStepsView", (S = E("SlideStepsView"), T = P([n]), A = P(h), y = P(h), S((f = e((w = class extends r {
        constructor(...t) {
            super(...t), i(this, "steps", f, this), i(this, "handleArea", b, this), i(this, "swipeIndicator", v, this), i(this, "threshold", C, this), this.animTime = .2, this.currentStep = 0, this.startTouchY = 0, this.lastTouchY = 0, this.isDragging = !1, this.heightArea = 0, this.isFirstShow = !0
        }
        onLoad() {
            0 !== this.steps.length && (this.swipeIndicator.on(h.EventType.TOUCH_START, this.onTouchStart, this), this.swipeIndicator.on(h.EventType.TOUCH_MOVE, this.onTouchMove, this), this.swipeIndicator.on(h.EventType.TOUCH_END, this.onTouchEnd, this), this.swipeIndicator.on(h.EventType.TOUCH_CANCEL, this.onTouchEnd, this))
        }
        showPopup() {
            if (this.node.active = !0, this.isFirstShow) {
                const t = this.node.getComponent(a);
                t.opacity = 0;
                const e = this.handleArea.getComponent(p);
                e.updateAlignment(), d.instance.updateAlignments(this.handleArea, !0, !1), this.heightArea = this.handleArea.getComponent(n).height, c(e) && e.destroy(), this.isFirstShow = !1;
                for (let t = 0; t < this.steps.length; t++) {
                    const e = this.steps[t].getComponent(p);
                    c(e) && (e.updateAlignment(), e.destroy())
                }
                this.scheduleOnce((() => {
                    t.opacity = 255
                }), 0)
            }
            this.handleArea.setPosition(0, -this.heightArea), this.currentStep = 0, this.gotoStep(this.currentStep, !0)
        }
        hidePopup() {
            l.stopAllByTarget(this.handleArea), u(this.handleArea).to(this.animTime, {
                position: new g(0, -this.heightArea, 0)
            }).call((() => {
                this.node.active = !1
            })).start(), this.currentStep = 0
        }
        onTouchStart(t) {
            const e = t.getLocation().y;
            this.startTouchY = e, this.lastTouchY = e, this.isDragging = !0
        }
        onTouchMove(t) {
            if (!this.isDragging) return;
            const e = t.getLocation().y,
                i = e - this.lastTouchY,
                s = this.handleArea.position;
            let n = s.y + i;
            const h = -this.heightArea + this.steps[this.steps.length - 1].contentSize.height;
            n > h && (n = h), this.handleArea.setPosition(s.x, n, s.z), this.lastTouchY = e
        }
        onTouchEnd(t) {
            this.isDragging = !1;
            const e = t.getLocation().y - this.startTouchY;
            Math.abs(e) < this.threshold || this.currentStep == this.steps.length - 1 && e > 0 ? this.gotoStep(this.currentStep, !0) : e > 0 ? this.gotoNextStep() : this.gotoPrevStep()
        }
        gotoStep(t, e = !0) {
            if (t < 0 || t >= this.steps.length) return;
            this.currentStep = t;
            let i = -this.heightArea + this.steps[t].contentSize.height;
            this.steps.length - 1 === this.currentStep && (i = 0), e ? u(this.handleArea).to(this.animTime, {
                position: new g(0, i, 0)
            }).start() : this.handleArea.setPosition(0, i)
        }
        gotoNextStep() {
            this.currentStep < this.steps.length - 1 && this.gotoStep(this.currentStep + 1)
        }
        gotoPrevStep() {
            this.currentStep > 0 ? this.gotoStep(this.currentStep - 1) : this.hidePopup()
        }
    }).prototype, "steps", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), b = e(w.prototype, "handleArea", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = e(w.prototype, "swipeIndicator", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = e(w.prototype, "threshold", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 80
        }
    }), m = w)) || m));
    s._RF.pop()
}