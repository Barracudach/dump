import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as s from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as x from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as e from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as _ from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as y from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";

function main() {
    var g, P, p, m, M, f, w, B, v;
    e._RF.push({}, "6e3f1e/91JMeYp6nnATnML9", "PeekCardComp", void 0);
    const {
        ccclass: W,
        property: b
    } = o;
    class k {
        constructor(t, s) {
            this.x1 = void 0, this.y1 = void 0, this.x2 = void 0, this.y2 = void 0, this.x1 = t.x, this.y1 = t.y, this.x2 = s.x, this.y2 = s.y
        }
        intersectsLine(t) {
            const s = (this.x2 - this.x1) * (t.y2 - t.y1) - (this.y2 - this.y1) * (t.x2 - t.x1);
            if (0 === s) return null;
            const i = ((t.x1 - this.x1) * (t.y2 - t.y1) - (t.y1 - this.y1) * (t.x2 - t.x1)) / s;
            return {
                x: this.x1 + i * (this.x2 - this.x1),
                y: this.y1 + i * (this.y2 - this.y1)
            }
        }
        _getLineCoefficients() {
            return {
                a: this.y1 - this.y2,
                b: this.x2 - this.x1,
                c: this.x1 * this.y2 - this.x2 * this.y1
            }
        }
        reflectPoint(t, s) {
            const {
                a: i,
                b: e,
                c: n
            } = this._getLineCoefficients(), o = i * i + e * e;
            return {
                x: 2 * ((e * (e * t - i * s) - i * n) / o) - t,
                y: 2 * ((i * (-e * t + i * s) - e * n) / o) - s
            }
        }
        _crossProduct(t, s, i, e) {
            return t * e - s * i
        }
        intersectSegment(t) {
            const s = this._crossProduct(t.x1 - this.x1, t.y1 - this.y1, this.x2 - this.x1, this.y2 - this.y1),
                i = this._crossProduct(t.x2 - this.x1, t.y2 - this.y1, this.x2 - this.x1, this.y2 - this.y1),
                e = this._crossProduct(this.x1 - t.x1, this.y1 - t.y1, t.x2 - t.x1, t.y2 - t.y1),
                n = this._crossProduct(this.x2 - t.x1, this.y2 - t.y1, t.x2 - t.x1, t.y2 - t.y1);
            return s * i < 0 && e * n < 0
        }
        _isPointOnSegment(t, s, i, e, n, o) {
            return t >= Math.min(i, n) && t <= Math.max(i, n) && s >= Math.min(e, o) && s <= Math.max(e, o)
        }
        getIntersection(t) {
            const s = (this.x1 - this.x2) * (t.y1 - t.y2) - (this.y1 - this.y2) * (t.x1 - t.x2);
            if (0 === s) return null;
            const i = ((this.x1 * this.y2 - this.y1 * this.x2) * (t.x1 - t.x2) - (this.x1 - this.x2) * (t.x1 * t.y2 - t.y1 * t.x2)) / s,
                e = ((this.x1 * this.y2 - this.y1 * this.x2) * (t.y1 - t.y2) - (this.y1 - this.y2) * (t.x1 * t.y2 - t.y1 * t.x2)) / s;
            return this._isPointOnSegment(i, e, this.x1, this.y1, this.x2, this.y2) && this._isPointOnSegment(i, e, t.x1, t.y1, t.x2, t.y2) ? {
                x: i,
                y: e
            } : null
        }
        getMiddleVerticalLine() {
            const t = (this.x1 + this.x2) / 2,
                s = (this.y1 + this.y2) / 2;
            if (this.x1 === this.x2) return new k({
                x: t,
                y: s
            }, {
                x: t + 1,
                y: s
            });
            const i = (this.y2 - this.y1) / (this.x2 - this.x1);
            return new k({
                x: t,
                y: s
            }, {
                x: 0,
                y: s - -1 / i * t
            })
        }
    }
    const E = 2e3;
    t("default", (g = W("PeekCardComp"), P = b(n), p = b(n), m = b(n), g((w = s((f = class extends r {
        constructor(...t) {
            super(...t), i(this, "cardBack", w, this), i(this, "cardBg", B, this), i(this, "cardFront", v, this), this._shadowWidth = 30, this._edgeWidth = 100, this._startPos = void 0, this._curPos = void 0, this._endPos = void 0, this._duration = .5, this._direction = void 0, this._manual = !1, this._timer = 0, this._offset = h.ZERO, this._status = "close", this._nodeUITransform = void 0, this.camera = void 0, this._safeBox = void 0, this._lastPeelPosition = void 0, this.speedScale = 1, this._onStartAnimate = void 0, this._onFinishAnimate = void 0
        }
        get isOpened() {
            return "open" === this._status
        }
        get isClosed() {
            return "close" === this._status
        }
        get isPeeking() {
            return "peek" === this._status
        }
        get isAnimate() {
            return "animate" === this._status
        }
        get manual() {
            return this._manual
        }
        get animateDuration() {
            return this._duration
        }
        get startPos() {
            return this._startPos
        }
        setOnStartAnimate(t) {
            this._onStartAnimate = t
        }
        setOnFinishAnimate(t) {
            this._onFinishAnimate = t
        }
        onLoad() {
            this.reset(), this._nodeUITransform = this.node.getComponent(a)
        }
        start() {
            const t = this.cardBack.node.getComponent(a).width * this.cardBack.node.scale.x * .1;
            this.setShadowWidth(t), this.camera = c.getScene().scene.renderScene.cameras[0].node.getComponent(d);
            const s = this._getWorldBoundingBox();
            s.xMin -= E, s.xMax += E, s.yMin -= E, s.yMax += E, this._safeBox = s
        }
        setManualOpen(t) {
            this.node.targetOff(this), t && (this.node.on(_.EventType.TOUCH_END, this._onTouchEnd, this), this.node.on(_.EventType.TOUCH_MOVE, this._onTouchMove, this), this.node.on(_.EventType.TOUCH_CANCEL, this._onTouchEnd, this)), this._manual = t
        }
        onOpenClick() {
            this.open()
        }
        setShadowWidth(t) {
            this._shadowWidth = t, this.cardFront.getMaterialInstance(0).setProperty("shadowWidth", t), this.cardBg.node.active && this.cardBg.getMaterialInstance(0).setProperty("shadowWidth", t)
        }
        setCardBgActive() {
            this.cardBg.node.active = !0
        }
        setCardFace(t) {
            this.cardFront.spriteFrame = t
        }
        getEdge(t) {
            const s = this._getWorldBoundingBox(),
                i = this._getRegion(t, s);
            return "" === i ? "r" : i
        }
        setCardBack(t) {
            this.cardBack.spriteFrame = t
        }
        open(t = .8, s = "r") {
            if ("open" === this._status) return;
            if ("animate" === this._status) return void(this._duration = t);
            if (!this._startPos && "close" === this._status) {
                const t = this._getWorldBoundingBox();
                this._startPos = x(t.xMin, t.center.y), this._curPos = x(t.xMin + 16, t.center.y)
            }
            this._checkMouseInBox(this._curPos, s) || (this._curPos = this._lastPeelPosition);
            const i = this._startPos,
                e = this._curPos;
            if (!i.equals(e)) {
                const s = this._getNearCrossLine(h.subtract(new h, e, i));
                return this._startAnimate(s), void(this._duration = t)
            }
            const n = this._getWorldBoundingBox(),
                o = x(n.xMin, n.center.y),
                r = x(n.xMax, n.center.y),
                a = x(n.center.x, n.yMax),
                c = x(n.center.x, n.yMin),
                d = this._getEdgeLines();
            let _, u = r,
                y = x(1, 0);
            switch (s) {
                case "l":
                    u = o, _ = d.right, y = x(-1, 0);
                    break;
                case "t":
                    u = a, _ = d.bottom, y = x(0, 1);
                    break;
                case "b":
                    u = c, _ = d.top, y = x(0, -1);
                    break;
                default:
                    u = r, _ = d.left, y = x(1, 0)
            }
            this._startPos = u, this._curPos = h.add(new h, u, y), this._startAnimate(_), this._duration = t
        }
        openImmediately() {
            var t;
            this._status = "open", this.cardFront.getMaterialInstance(0).setProperty("shadowWidth", 0), this.cardBg.node.active && this.cardBg.getMaterialInstance(0).setProperty("shadowWidth", 0), null == (t = this._onFinishAnimate) || t.call(this)
        }
        reset() {
            this._startPos = null, this._curPos = new h(h.ZERO), this._offset = new h(h.ZERO), this._timer = 0, this._status = "close", this.cardFront.getMaterialInstance(0).setProperty("shadowWidth", this._shadowWidth), this.cardBg.node.active && this.cardBg.getMaterialInstance(0).setProperty("shadowWidth", this._shadowWidth), this._applyUniform(new h(h.ZERO), new h(h.ZERO), new h(h.ZERO))
        }
        get _peekEnable() {
            return "close" === this._status || "peek" === this._status
        }
        _onTouchMove(t) {
            if (this._peekEnable)
                if (this._startPos) {
                    const s = this._location2WorldPosition(t.getLocation());
                    this._curPos = s;
                    const i = this._getWorldBoundingBox(),
                        e = this._getRegion(s, i);
                    if (e) {
                        const t = this._getRegion(this._startPos, i);
                        if (e === t) return;
                        if (h.subtract(new h, this._startPos, s).length() < Math.min(i.width, i.height)) return;
                        if (!this._checkMouseInBox(s, t)) return;
                        const n = this._getNearCrossLine(h.subtract(new h, this._curPos, this._startPos));
                        return void this._startAnimate(n)
                    }
                    this._status = "peek", this._applyUniform(this._startPos, this._curPos, new h(h.ZERO))
                } else this._checkStartPoint(t.getLocation())
        }
        _onTouchEnd(t) {
            this.isPeeking && this.reset()
        }
        _isInRect(t) {
            return this._getWorldBoundingBox().contains(t)
        }
        _getRegion(t, s) {
            let i = "";
            return t.y >= s.yMax ? i += "t" : t.y <= s.yMin && (i += "b"), t.x >= s.xMax ? i += "r" : t.x <= s.xMin && (i += "l"), i
        }
        _getEdgeLines() {
            const t = this._getWorldBoundingBox(),
                s = x(t.xMin, t.yMin),
                i = x(t.xMin, t.yMax),
                e = x(t.xMax, t.yMin),
                n = x(t.xMax, t.yMax),
                o = new k(s, i),
                r = new k(e, n),
                h = new k(s, e);
            return {
                left: o,
                right: r,
                top: new k(i, n),
                bottom: h
            }
        }
        _getNearCrossLine(t) {
            const s = this._getEdgeLines(),
                i = this._getWorldBoundingBox(),
                e = this._curPos;
            if (e.x < i.xMin) return s.left;
            if (e.x > i.xMax) return s.right;
            if (e.y < i.yMin) return s.bottom;
            if (e.y > i.yMax) return s.top;
            const n = t.normalize(),
                o = x(i.center.x, i.center.y),
                r = x(i.xMax, i.yMax),
                a = h.subtract(new h, r, o).normalize(),
                c = a.cross(n),
                d = n.dot(a);
            return c * d > 0 ? d > 0 ? s.top : s.bottom : d > 0 ? s.right : s.left
        }
        _startAnimate(t) {
            var s;
            const i = t.reflectPoint(this._startPos.x, this._startPos.y);
            this._endPos = x(i.x, i.y), this._duration = .5, this._status = "animate", this._timer = 0, null == (s = this._onStartAnimate) || s.call(this)
        }
        _getWorldBoundingBox() {
            const t = u(y.ZERO),
                s = this._nodeUITransform.convertToWorldSpaceAR(t),
                i = this.cardBack.node.getComponent(a).contentSize;
            return new l(s.x - i.width / 2, s.y - i.height / 2, i.width, i.height)
        }
        _applyUniform(t, s, i) {
            t = h.add(new h, t, i), s = h.add(new h, s, i), this.cardBack.node.setPosition(new y(i.x, i.y, 0)), this.cardFront.node.setPosition(new y(i.x, i.y, 0));
            const e = this.cardBack.getMaterialInstance(0);
            e.setProperty("startPos", t), e.setProperty("endPos", s);
            const n = this.cardFront.getMaterialInstance(0);
            if (n.setProperty("startPos", t), n.setProperty("endPos", s), this.cardBg.node.active) {
                this.cardBg.node.setPosition(new y(i.x, i.y, 0));
                const e = this.cardBg.getMaterialInstance(0);
                e.setProperty("startPos", t), e.setProperty("endPos", s)
            }
            this._lastPeelPosition = s
        }
        _checkStartPoint(t) {
            const s = this._location2WorldPosition(t);
            if (this._isPointInEdge(s)) {
                const t = this._getWorldBoundingBox(),
                    i = s.x - t.xMin,
                    e = t.xMax - s.x,
                    n = t.yMax - s.y,
                    o = s.y - t.yMin,
                    r = this._edgeWidth,
                    a = s.clone();
                i < r && (a.x = t.xMin), e < r && (a.x = t.xMax), n < r && (a.y = t.yMax), o < r && (a.y = t.yMin), this._startPos = a, this._direction = h.subtract(new h, t.center, a).normalize()
            }
        }
        _isPointInEdge(t) {
            const s = this._getWorldBoundingBox(),
                i = this._edgeWidth,
                e = new l(s.x + i, s.y + i, s.width - 2 * i, s.height - 2 * i);
            return s.contains(t) && !e.contains(t)
        }
        _location2WorldPosition(t) {
            const s = new y(t.x, t.y, 0),
                i = new y;
            return this.camera.screenToWorld(s, i), x(i.x, i.y)
        }
        update(t) {
            if ("animate" === this._status) {
                if (!this._startPos || 0 === this._duration) return void this.openImmediately();
                this._timer += t * this.speedScale;
                let s = this._timer / this._duration;
                s = Math.min(1, this._easeSineIn(s));
                const i = h.lerp(new h, this._curPos, this._endPos, s);
                this._startPos.x === i.x && (i.x -= .1), this._startPos.y === i.y && (i.y -= .1);
                let e = new y(y.ZERO);
                if (!this._isInRect(i)) {
                    const t = new k(this._startPos, i).getMiddleVerticalLine(),
                        s = this._getWorldBoundingBox(),
                        n = t.reflectPoint(s.xMin, s.yMin),
                        o = t.reflectPoint(s.xMax, s.yMax),
                        r = .5 * (n.x + o.x),
                        a = .5 * (n.y + o.y),
                        c = this._nodeUITransform.convertToNodeSpaceAR(u(r, a, 1));
                    e = h.multiply(new y, c, y.NEG_ONE)
                }
                this._offset = h.lerp(new h, this._offset, x(e.x, e.y), s), this._applyUniform(this._startPos, i, this._offset), s >= 1 && (this._startPos = null, this.speedScale = 1)
            }
        }
        get animateProgress() {
            return "animate" !== this._status ? 0 : 0 === this._duration ? 1 : Math.min(1, this._timer / this._duration)
        }
        _easeSineIn(t) {
            return 1 - Math.cos(t * Math.PI / 2)
        }
        _checkMouseInBox(t, s) {
            const i = new l(this._safeBox),
                e = E,
                n = {
                    t: () => {
                        i.yMax -= e
                    },
                    b: () => {
                        i.yMin += e
                    },
                    l: () => {
                        i.xMin += e
                    },
                    r: () => {
                        i.xMax -= e
                    }
                };
            for (const t in n) s.includes(t) && n[t]();
            return !!i.contains(t)
        }
    }).prototype, "cardBack", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = s(f.prototype, "cardBg", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = s(f.prototype, "cardFront", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = f)) || M));
    e._RF.pop()
}