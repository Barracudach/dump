import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as _ from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as p from "./cc.js";
import * as l from "./cc.js";
import * as S from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as y from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as C from "./cv.js";

function main() {
    var v, k, f, w, F, M, P, x, B, N, b, z, A, V, R, T;
    s._RF.push({}, "f4c0c2hQ6pAO7eqiRfQyhfu", "PeekCard", void 0);
    const {
        ccclass: O,
        property: E
    } = n;
    t("default", (v = E(o), k = E({
        type: a,
        tooltip: "mask/cardBack"
    }), f = E({
        type: a,
        tooltip: "mask/cardFace"
    }), w = E({
        type: o,
        tooltip: "mask/cardFace/shadowMask"
    }), F = E({
        type: a,
        tooltip: "mask/cardFace/shadowMask/shadow"
    }), M = E(a), P = E(a), O((N = e((B = class extends h {
        constructor(...t) {
            super(...t), i(this, "mask", N, this), i(this, "cardBack", b, this), i(this, "cardFace", z, this), i(this, "shadowMask", A, this), i(this, "shadow", V, this), i(this, "finger1", R, this), i(this, "finger2", T, this), this._directionLength = 5, this._moveSpeed = .5, this.angleFixed = 10, this._isOpenCard = !1, this._isMoveStart = !1, this._cardSize = void 0, this._tStartPos = void 0, this._tMoveVec = void 0, this._rotation = 0, this._inFingers = [], this._finishCallBack = void 0, this._topNodeRadioNum = 0, this._auto_INSTANCE = 0, this._isAutoPlay = !1
        }
        start() {
            this._auto_INSTANCE = 1.1 * this.mask.node.getComponent(r).height / 1080
        }
        setFinishCallBack(t) {
            this._finishCallBack = t
        }
        init() {
            this._cardSize || (this._cardSize = this.cardBack.getContentSize()), this._initCardNode(this.mask.node, this._cardSize), this._initCardNode(this.cardBack, this._cardSize), this._initCardNode(this.cardFace, this._cardSize), this._initCardNode(this.shadowMask.node, this._cardSize), this.cardFace.setPosition(-this.mask.node.getComponent(r).width, 0), this.shadow.setRotation(new c(0, 0, 0)), this.shadow.getComponent(r).height = 2 * Math.sqrt(Math.pow(this._cardSize.height, 2) + Math.pow(this._cardSize.width, 2)), this.shadow.getComponent(r).width = 40;
            var t = this.cardFace.getComponent(r).width / 2 + this.shadowMask.node.getComponent(r).width / 2,
                e = this.cardFace.getComponent(r).height / 2 + this.shadowMask.node.getComponent(r).height / 2;
            this.shadow.setPosition(t, e), this._initFinger(), this._initStatus()
        }
        _touchStart(t) {
            if (this._isOpenCard) return;
            let e = 15,
                i = this.node.parent.convertToWorldSpaceAR(this.node.position),
                s = this.cardBack.getContentSize(),
                o = t.getLocation();
            (i.y - o.y < .5 * s.width + e && i.y - o.y > .5 * s.width - e && Math.abs(i.x - o.x) < .5 * s.height + e || Math.abs(i.x - o.x) < .5 * s.height + e && Math.abs(i.x - o.x) > .5 * s.height - e && Math.abs(i.y - o.y) < .5 * s.width + e) && console.log("---------", o)
        }
        _touchMove(t) {
            if (this._isOpenCard || !this._tStartPos) return;
            let e = t.getLocation();
            e.x = this._tStartPos.x;
            let i = t.getPreviousLocation();
            if (e.equals(i)) return;
            let s = e.subtract(this._tStartPos),
                o = e.subtract(i);
            console.log("bob2020 this.cardFace.position -> ", this.cardFace.position.x, this.cardFace.position.y);
            let a = s.length();
            if (d("1", e, i, this._tStartPos, a), 0 == this._isMoveStart && a >= this._directionLength) {
                this._isMoveStart = !0, this._tMoveVec = this._fixedDirection(s), this._rotation = this._getSignAngle(this._tMoveVec, g(1, 0));
                let t = this._getOutRectSize(this.cardBack, this._rotation);
                this.mask.node.getComponent(r).setContentSize(t), this.mask.node.angle = this._rotation, this.cardBack.angle = -this._rotation, this.cardFace.angle = this._rotation, this.shadow.angle = -this._rotation, this.setCardAndShadow()
            } else if (this._isMoveStart) {
                let t = o.project(this._tMoveVec);
                const e = t.clone().negative();
                this._moveByVec2(this.mask.node, t, 2), this._moveByVec2(this.cardBack, e, 2), this._moveByVec2(this.cardFace, t, 2), this._moveByVec2(this.shadow, e, 2);
                let i = this._getNodeVertexByWorldSpaceAR(this.cardFace, -10),
                    s = this._getNodeVertexByWorldSpaceAR(this.mask.node),
                    r = [];
                s.forEach((t => {
                    r.push(g(t.x, t.y))
                })), this._inFingers = [];
                for (let t = 0; t < i.length; t++) 1 != t && 3 != t && C.tools.pointInPolygon(g(i[t].x, i[t].y), r) && this._inFingers.push(t);
                for (let t = 0; t < this._inFingers.length; t++) {
                    var n = this._inFingers[t],
                        h = this["finger" + (t + 1)];
                    if (h) {
                        h.active = !0;
                        let t = i[n];
                        h.setPosition(h.parent.convertToNodeSpaceAR(_(t.x, t.y, 0)))
                    }
                }
                a = this._inFingers.length, 0 == a ? (this.finger1.active = !1, this.finger2.active = !1) : 1 == a && (this.finger2.active = !1), this._canOpen() && this.openCard(), t.x * this._tMoveVec.x <= 0 && t.y * this._tMoveVec.y <= 0 && 0 == a && (this._touchEnd(), this._tStartPos = void 0, console.log("禁止继续回退"))
            }
        }
        _touchEnd(t) {
            !this._isOpenCard && this._tStartPos && this.init()
        }
        setContentSize(t, e) {
            var i = this._getSize(t, e);
            this.node.getComponent(r).setContentSize(i)
        }
        setCardSize(t, e) {
            var i = this._getSize(t, e);
            this._cardSize = i, this.mask.node.getComponent(r).setContentSize(i), this.cardBack.getComponent(r).setContentSize(i), this.cardFace.getComponent(r).setContentSize(i), this.shadowMask.node.getComponent(r).setContentSize(i), this.shadow.getComponent(r).setContentSize(i.width, 2 * i.height)
        }
        async setCardBack(t) {
            t = await this._setNodeSpriteFrame(this.cardBack, t), this.shadowMask.spriteFrame = t, this.shadowMask.type = o.Type.SPRITE_STENCIL, this.shadowMask.alphaThreshold = .1
        }
        async setCardFace(t) {
            this._setNodeSpriteFrame(this.cardFace, t)
        }
        async setShadow(t) {
            this._setNodeSpriteFrame(this.shadow, t)
        }
        async setFinger(t, e) {
            this._setNodeSpriteFrame(this["finger" + e], t)
        }
        _canOpen() {
            return this.mask.node.getPosition().length() > 1.1 * this.mask.node.getComponent(r).height / 2
        }
        openCard() {
            this.init(), d("开牌"), this.cardFace.setPosition(0, 0), this._isOpenCard = !0, "function" == typeof this._finishCallBack && this._finishCallBack()
        }
        _getOutRectSize(t, e) {
            (e = Math.abs(e)) > 90 && e <= 180 && (e = 180 - e);
            var i = Math.PI / 180 * e,
                s = t.getComponent(r).height * Math.sin(i) + t.getComponent(r).width * Math.cos(i),
                o = t.getComponent(r).height * Math.cos(i) + t.getComponent(r).width * Math.sin(i);
            return p(s, o)
        }
        _moveByVec2(t, e, i = 1) {
            var s = t.parent.convertToWorldSpaceAR(t.getPosition());
            s = _(s.x + e.x * i, s.y + e.y * i, 0);
            var o = t.parent.convertToNodeSpaceAR(s);
            t.setPosition(o)
        }
        _getSignAngle(t, e) {
            var i = t.signAngle(e);
            return 180 / Math.PI * i
        }
        _fixedDirection(t) {
            if (this.angleFixed) {
                var e = this.angleFixed,
                    i = g(1, 0);
                if ((s = this._getSignAngle(t, i)) <= e + 0 && s >= 0 - e || s <= e + -180 || s >= 180 - e) return t = t.project(i);
                var s, o = g(0, 1);
                if ((s = this._getSignAngle(t, o)) <= e + 0 && s >= 0 - e || s <= e + -180 || s >= 180 - e) return t = t.project(o)
            }
            return t
        }
        _getNodeVertexByWorldSpaceAR(t, e = 0) {
            let i = this._getNodeVertexByNodeSpaceAR(t, e);
            for (let e = 0; e < i.length; e++) i[e] = t.convertToWorldSpaceAR(i[e]);
            return i
        }
        _getNodeVertexByNodeSpaceAR(t, e = 0) {
            var i = t.getComponent(r).width * t.getComponent(r).anchorX + e,
                s = t.getComponent(r).width * (1 - t.getComponent(r).anchorX) + e,
                o = t.getComponent(r).height * t.getComponent(r).anchorY + e,
                a = t.getComponent(r).height * (1 - t.getComponent(r).anchorY) + e;
            return [_(-i, a, 0), _(s, a, 0), _(s, -o, 0), _(-i, -o, 0)]
        }
        _getQuadrant(t) {
            return 0 == t.x && 0 == t.y ? 9 : 0 == t.x && t.y > 0 ? 6 : 0 == t.x && t.y < 0 ? 8 : t.x > 0 && 0 == t.y ? 5 : t.x < 0 && 0 == t.y ? 7 : t.x > 0 && t.y > 0 ? 1 : t.x < 0 && t.y > 0 ? 2 : t.x < 0 && t.y < 0 ? 3 : t.x > 0 && t.y < 0 ? 4 : (l("判断象限错误::" + JSON.stringify(t)), 0)
        }
        _initCardNode(t, e) {
            t.getComponent(r).setContentSize(e), t.setRotation(new c(0, 0, 0)), t.setPosition(0, 0, 0)
        }
        _initFinger() {
            this._inFingers = [], this.finger1.active = !1, this.finger2.active = !1
        }
        _initStatus() {
            this._isOpenCard = !1, this._isMoveStart = !1, this._rotation = 0
        }
        _getSize(t, e) {
            return null == t ? p(0, 0) : t instanceof m ? t : p(t, null != e ? e : t)
        }
        async _loadSpriteFrameSync(t) {
            t.endsWith("/spriteFrame") || (t += "/spriteFrame");
            var e = u.get(t, S);
            return e && e.loaded ? e : new Promise((e => {
                u.load(t, S, ((t, i) => {
                    e(i)
                }))
            }))
        }
        async _setNodeSpriteFrame(t, e) {
            return "string" == typeof e && (e = await this._loadSpriteFrameSync(e)), t.getComponent(y).spriteFrame = e, e
        }
        setCardAndShadow() {
            let t = this._getQuadrant(this._tMoveVec),
                e = this._getNodeVertexByNodeSpaceAR(this.cardFace);
            if (0 == this._topNodeRadioNum) switch (t) {
                case 1:
                case 5:
                    this.cardFace.setPosition(-this.mask.node.getComponent(r).width, this.cardBack.position.y), this.shadow.setPosition(e[2]);
                    break;
                case 2:
                case 6:
                    this.cardFace.setPosition(-this.mask.node.getComponent(r).width, -this.cardBack.position.y), this.shadow.setPosition(e[3]);
                    break;
                case 3:
                case 7:
                    this.cardFace.setPosition(-this.mask.node.getComponent(r).width, -this.cardBack.position.y), this.shadow.setPosition(e[0]);
                    break;
                case 4:
                case 8:
                    this.cardFace.setPosition(-this.mask.node.getComponent(r).width, this.cardBack.position.y), this.shadow.setPosition(e[1]);
                    break;
                default:
                    l("移动的方向向量为Vec2(0, 0)"), this._isMoveStart = !1
            } else if (-90 == this._topNodeRadioNum) switch (this.shadow.active = !1, t) {
                case 1:
                case 5:
                    this.cardFace.setPosition(this.cardBack.position.x, -this.mask.node.getComponent(r).height), this.shadow.setPosition(e[2]);
                    break;
                case 2:
                case 6:
                    this.cardFace.setPosition(-this.cardBack.position.x, -this.mask.node.getComponent(r).height), this.shadow.setPosition(e[2]);
                    break;
                case 3:
                case 7:
                    this.cardFace.setPosition(-this.cardBack.position.x, -this.mask.node.getComponent(r).height), this.shadow.setPosition(e[0]);
                    break;
                case 4:
                case 8:
                    this.cardFace.setPosition(this.cardBack.position.x, -this.mask.node.getComponent(r).height), this.shadow.setPosition(e[1]);
                    break;
                default:
                    l("移动的方向向量为Vec2(0, 0)"), this._isMoveStart = !1
            }
        }
        setTopNodeRadioNum(t) {
            this._topNodeRadioNum = t, this.node.angle = t
        }
        autoPlay() {
            if (this._isAutoPlay && !this._isOpenCard)
                if (0 == this._isMoveStart) {
                    this._isMoveStart = !0;
                    let t = g(0, this._auto_INSTANCE);
                    this._tMoveVec = this._fixedDirection(t).clone().negative(), this._rotation = this._getSignAngle(this._tMoveVec, g(1, 0));
                    let e = this._getOutRectSize(this.cardBack, this._rotation);
                    this.mask.node.getComponent(r).setContentSize(e), this.mask.node.angle = this._rotation, this.cardBack.angle = -this._rotation, this.cardFace.angle = this._rotation, this.shadow.angle = -this._rotation, this.setCardAndShadow()
                } else if (this._isMoveStart) {
                let i = g(0, this._auto_INSTANCE).clone().negative().project(this._tMoveVec);
                const s = i.clone().negative();
                this._moveByVec2(this.mask.node, s, 2), this._moveByVec2(this.cardBack, i, 2), this._moveByVec2(this.cardFace, s, 2), this._moveByVec2(this.shadow, i, 2);
                let o = this._getNodeVertexByWorldSpaceAR(this.cardFace, -10),
                    a = this._getNodeVertexByWorldSpaceAR(this.mask.node),
                    n = [];
                a.forEach((t => {
                    n.push(g(t.x, t.y))
                })), this._inFingers = [];
                for (let t = 0; t < o.length; t++) 1 != t && 3 != t && C.tools.pointInPolygon(g(o[t].x, o[t].y), n) && this._inFingers.push(t);
                for (let i = 0; i < this._inFingers.length; i++) {
                    var t = this._inFingers[i],
                        e = this["finger" + (i + 1)];
                    if (e) {
                        e.active = !0;
                        let i = _(e.parent.convertToNodeSpaceAR(o[t]));
                        e.setPosition(i)
                    }
                }
                let h = this._inFingers.length;
                0 == h ? (this.finger1.active = !1, this.finger2.active = !1) : 1 == h && (this.finger2.active = !1), this._canOpen() && this.openCard(), i.x * this._tMoveVec.x <= 0 && i.y * this._tMoveVec.y <= 0 && 0 == h && (this._touchEnd(), this._tStartPos = void 0, console.log("禁止继续回退"))
            }
        }
        update() {
            this.autoPlay()
        }
        setAutoPlay(t) {
            this._isAutoPlay = t
        }
    }).prototype, "mask", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {}
    }), b = e(B.prototype, "cardBack", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {}
    }), z = e(B.prototype, "cardFace", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {}
    }), A = e(B.prototype, "shadowMask", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {}
    }), V = e(B.prototype, "shadow", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {}
    }), R = e(B.prototype, "finger1", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {}
    }), T = e(B.prototype, "finger2", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {}
    }), x = B)) || x));
    s._RF.pop()
}