import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as p from "./PersonalSetting.js";
import * as T from "./NodeTools.js";

function main() {
    var S, d, f, y, _, v, x, C;
    s._RF.push({}, "60dd7XKjrJBWrmakrxOBMvT", "EditSelfAvatar", void 0);
    const {
        ccclass: A,
        property: E
    } = r;
    var b = o({
        top_left: 0,
        top_right: 1,
        bottom_left: 2,
        bottom_right: 3
    });
    t("EditSelfAvatar", (S = E(a), d = E(n), f = E([n]), A((v = e((_ = class extends h {
        constructor(...t) {
            super(...t), i(this, "widget", v, this), i(this, "image", x, this), i(this, "corner", C, this), this._personalSetting = null, this.imageTouches = [], this.cornerTouch = [], this.startScale = 0, this.startPosition = c(g.ZERO), this.isAdjust = !1
        }
        onLoad() {
            l.isNative ? this.setCornerActive(!1) : this.setCornerActive(!0)
        }
        init(t) {
            this._personalSetting = t, this.imageTouches = [], this.cornerTouch = [], this.startScale = 0, this.startPosition = c(g.ZERO), this.isAdjust = !1, this.updateImage()
        }
        updateImage() {
            this._personalSetting.setImage(this.image.getComponent(u))
        }
        getDistance(t, e) {
            return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
        }
        getScale() {
            let t = Math.max(this._personalSetting.selfAvatar._minScale, this.image.getScale().x),
                e = Math.max(this._personalSetting.selfAvatar._minScale, this.image.getScale().y);
            return c(t, e, 1)
        }
        adjustScale() {
            return m().to(.1, {
                scale: this.getScale()
            })
        }
        adjustPosition() {
            let t = this.image.position.x,
                e = this.image.position.y,
                i = (T.getNodeWidth(this.image) * this.getScale().x - 512) / 2,
                s = (T.getNodeHeight(this.image) * this.getScale().y - 512) / 2;
            return t < -i ? t = -i : t > i && (t = i), e < -s ? e = -s : e > s && (e = s), m().to(.1, {
                position: c(t, e, this.image.position.z)
            })
        }
        adjustImage() {
            this.isAdjust = !0, m(this.image).sequence(this.adjustScale(), this.adjustPosition()).call((() => {
                this.isAdjust = !1
            })).start()
        }
        getTouchCount() {
            let t = 0;
            for (let e = 0; e < this.imageTouches.length; e++) null !== this.imageTouches[e] && t++;
            return t
        }
        setImageTouch() {
            let t = t => {
                let e = t.getID();
                e > 1 || (this.imageTouches[e] = null, 0 === this.getTouchCount() && this.adjustImage())
            };
            this.image.on(n.EventType.TOUCH_START, (t => {
                let e = t.getID();
                if (e > 1) return;
                this.imageTouches[e] = this.isAdjust ? null : t;
                let i = this.getTouchCount();
                1 === i ? this.startPosition = this.image.position : i > 1 && (this.startScale = this.image.getScale().x)
            })), this.image.on(n.EventType.TOUCH_MOVE, (t => {
                let e = t.getID();
                if (e > 1) return;
                this.imageTouches[e] = this.isAdjust ? null : t;
                let i = this.getTouchCount();
                if (1 === i) {
                    let e = t.getTouches()[0] || this.imageTouches[0] || this.imageTouches[1],
                        i = e.getLocation().subtract(e.getStartLocation());
                    this.image.setPosition(this.startPosition.x + i.x, this.startPosition.y + i.y)
                } else if (i > 1) {
                    let e = t.getTouches()[0] || this.imageTouches[0],
                        i = t.getTouches()[1] || this.imageTouches[1],
                        s = this.getDistance(e.getPreviousLocation(), i.getPreviousLocation()),
                        o = this.getDistance(e.getLocation(), i.getLocation()) - s,
                        a = this.image.getScale().x / this.startScale * 512 - 512 + o,
                        n = Math.max(0, this.startScale * (512 + a) / 512);
                    this.image.setScale(n, n)
                }
            })), this.image.on(n.EventType.TOUCH_END, t), this.image.on(n.EventType.TOUCH_CANCEL, t)
        }
        setCornerTouch() {
            for (let t = 0; t < this.corner.length; t++) {
                let e = e => {
                        this.cornerTouch[t] = !this.isAdjust, this.cornerTouch[t] && (this.startScale = this.image.getScale().x)
                    },
                    i = e => {
                        if (this.cornerTouch[t]) {
                            let i = e.getPreviousLocation(),
                                s = e.getLocation(),
                                o = this.getDistance(s, i);
                            switch (t) {
                                case b.top_left:
                                    o *= s.x >= i.x && s.y <= i.y ? -1 : 1;
                                    break;
                                case b.top_right:
                                    o *= s.x <= i.x && s.y <= i.y ? -1 : 1;
                                    break;
                                case b.bottom_left:
                                    o *= s.x >= i.x && s.y >= i.y ? -1 : 1;
                                    break;
                                case b.bottom_right:
                                    o *= s.x <= i.x && s.y >= i.y ? -1 : 1
                            }
                            let a = this.image.getScale().x / this.startScale * 512 - 512 + o,
                                n = Math.max(0, this.startScale * (512 + a) / 512);
                            this.image.setScale(n, n)
                        }
                    },
                    s = e => {
                        this.cornerTouch[t] = !1, this.adjustImage()
                    };
                this.corner[t].on(n.EventType.TOUCH_START, e), this.corner[t].on(n.EventType.TOUCH_MOVE, i), this.corner[t].on(n.EventType.TOUCH_END, s), this.corner[t].on(n.EventType.TOUCH_CANCEL, s)
            }
        }
        setCornerActive(t) {
            this.setImageTouch();
            for (let e = 0; e < this.corner.length; e++) this.corner[e].active = t;
            t && this.setCornerTouch()
        }
        onClickBack() {
            this._personalSetting.selfAvatar.setEditInfo(this.image.position.x, this.image.position.y, this.image.getScale().x), this._personalSetting.updateAvatar(!0, !0), this._personalSetting.triggerAvatar(!1), this._personalSetting instanceof p && this._personalSetting.triggerConfirmButton()
        }
        onClickReset() {
            this._personalSetting.selfAvatar.resetEditInfo(), this.updateImage()
        }
    }).prototype, "widget", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = e(_.prototype, "image", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = e(_.prototype, "corner", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), y = _)) || y));
    s._RF.pop()
}