import * as u from "./cc.js";
import * as h from "./cc.js";
import * as _ from "./cc.js";
import * as e from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as c from "./cc.js";
import * as S from "./cc.js";
import * as p from "./cc.js";
import * as i from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as T from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as R from "./HashMap.js";

function main() {
    var C;
    e._RF.push({}, "68f22HsctNNl5hTkld2JIrr", "RubCard", void 0);
    var N = function(t) {
            return t[t.SC_DIR_NONE = 0] = "SC_DIR_NONE", t[t.SC_DIR_DOWN_UP = 1] = "SC_DIR_DOWN_UP", t[t.SC_DIR_LEFT_RIGHT = 2] = "SC_DIR_LEFT_RIGHT", t[t.SC_DIR_RIGHT_LEFT = 3] = "SC_DIR_RIGHT_LEFT", t
        }(N || {}),
        M = function(t) {
            return t[t.SC_MAT_None = 1] = "SC_MAT_None", t[t.SC_MAT_DOWN_UP = 2] = "SC_MAT_DOWN_UP", t[t.SC_MAT_DOWN_UP_AUTO = 3] = "SC_MAT_DOWN_UP_AUTO", t[t.SC_MAT_DOWN_LEFT_RIGHT = 4] = "SC_MAT_DOWN_LEFT_RIGHT", t[t.SC_MAT_DOWN_RIGHT_LEFT = 5] = "SC_MAT_DOWN_RIGHT_LEFT", t[t.SC_MAT_DOWN_LEFT_RIGHT_AUTO = 6] = "SC_MAT_DOWN_LEFT_RIGHT_AUTO", t
        }(M || {}),
        E = function(t) {
            return t[t.SC_ALIGNMENT_NONE = 0] = "SC_ALIGNMENT_NONE", t[t.SC_ALIGNMENT_VERTICAL = 1] = "SC_ALIGNMENT_VERTICAL", t[t.SC_ALIGNMENT_HORIZONTAL = 2] = "SC_ALIGNMENT_HORIZONTAL", t
        }(E || {}),
        I = function(t) {
            return t[t.SC_STATUS_MOVE = 0] = "SC_STATUS_MOVE", t[t.SC_STATUS_SMOOTH = 1] = "SC_STATUS_SMOOTH", t
        }(I || {});
    const {
        ccclass: m,
        property: k
    } = l;
    t("RubCard", m(C = class extends s {
        constructor(...t) {
            super(...t), this._pokerFaceTexture = null, this._pokerBackTexture = null, this._pokerFaceTextureFileName = null, this._pokerBackTextureFileName = null, this._rotationAnger = Math.PI / 3, this._rotationTotalFrame = 10, this._smoothAnger = Math.PI / 6, this._smoothFrame = 0, this._smoothTotalFrame = 10, this._status = I.SC_STATUS_MOVE, this._isCreateNum = !1, this._bChangedMatOnce = !1, this._pokerRatio = 0, this._pokerAlign = E.SC_ALIGNMENT_HORIZONTAL, this._pokerDir = N.SC_DIR_NONE, this._pokerSrcWidth = 0, this._pokerSrcHeight = 0, this._pokerDestWidth = 0, this._pokerDestHeight = 0, this._touchStartY = 0, this._touchStartLRX = 0, this._touchStartRLX = 0, this._meshRenderer = null, this._mapMat = new R, this._udMesh = null, this._lrMesh = null, this._scaleRatio = _(i.ONE), this._position = _(i.ZERO), this._callback = null, this._filpNum = 1.2, this._autoFlip = !1, this._autoShowTime = 2, this.unregisterEvent = !1
        }
        setFaceTextureFileName(t) {
            this._pokerFaceTextureFileName = t, console.log("RubCard setFaceTextureFileName")
        }
        setBackTextureFileName(t) {
            this._pokerBackTextureFileName = t, console.log("RubCard setBackTextureFileName")
        }
        setCallBack(t) {
            this._callback = t
        }
        setPosition(t, e) {
            t === this._position.x && e === this._position.y || (this._position.x = t, this._position.y = e)
        }
        setScale(t) {
            this._scaleRatio = t
        }
        onLoad() {
            this._registerTouchEvent()
        }
        start() {
            console.log("RubCard start()"), this._loadFaceTexture(), this._loadBackTexture()
        }
        onEnable() {}
        onDisable() {
            this._unregisterTouchEvent()
        }
        update(t) {
            if (this._meshRenderer) {
                this._autoFlip && (this._pokerRatio += this._filpNum / (60 * this._autoShowTime), this._pokerRatio >= this._filpNum && (this._status = I.SC_STATUS_SMOOTH, this._autoFlip = !1));
                let t = this._meshRenderer.getMaterialInstance(0);
                switch (this._status) {
                    case I.SC_STATUS_MOVE:
                        t.setProperty("ratio", this._pokerRatio);
                        break;
                    case I.SC_STATUS_SMOOTH:
                        if (this._smoothFrame <= this._rotationTotalFrame) {
                            let e = -this._rotationAnger * this._smoothFrame / this._rotationTotalFrame;
                            t.setProperty("rotation", e)
                        } else if (this._smoothFrame < this._rotationTotalFrame + this._smoothTotalFrame) {
                            this._changeToAutoMatOnce();
                            let e = (this._smoothFrame - this._rotationTotalFrame) / this._smoothTotalFrame,
                                s = Math.max(.01, this._smoothAnger * (1 - e));
                            t.setProperty("rotation", s)
                        } else if (0 == this._isCreateNum && (this._isCreateNum = !0, t.setProperty("rotation", 0), this.node.removeFromParent(), this.node.destroy(), this._callback)) {
                            let t = 0;
                            switch (this._pokerDir) {
                                case N.SC_DIR_NONE:
                                    t = 0;
                                    break;
                                case N.SC_DIR_DOWN_UP:
                                case N.SC_DIR_LEFT_RIGHT:
                                    t = -90;
                                    break;
                                case N.SC_DIR_RIGHT_LEFT:
                                    t = 90
                            }
                            this._callback(this._pokerDir, t)
                        }
                        this._smoothFrame = this._smoothFrame + 1
                }
            }
        }
        _loadFaceTexture() {
            let t = this._pokerFaceTextureFileName,
                e = t => {
                    this._pokerFaceTexture = t, this._preInit()
                },
                s = h.get(t + "/texture", o);
            s ? e(s) : h.load(t + "/texture", o, ((s, _) => {
                s ? console.error(s.message || s) : (console.warn(`RubCard - warning: This resource is loaded asynchronously - [path =${t}]`), e(_))
            }))
        }
        _loadBackTexture() {
            let t = this._pokerBackTextureFileName,
                e = this,
                s = t => {
                    e._pokerBackTexture = t, e._preInit()
                },
                _ = h.get(t + "/texture", o);
            _ ? s(_) : h.load(t + "/texture", o, ((e, _) => {
                e ? console.error(e.message || e) : (console.warn(`RubCard - warning: This resource is loaded asynchronously - [path =${t}]`), s(_))
            }))
        }
        _preInit() {
            this._pokerFaceTexture && this._pokerBackTexture && this._init()
        }
        _init() {
            let t = this.node.getComponent(r);
            t.projection = a.scene.CameraProjection.PERSPECTIVE, t.fov = 60, this._initMatInfo(), this._udMesh = this._createMesh(E.SC_ALIGNMENT_VERTICAL), this._lrMesh = this._createMesh(E.SC_ALIGNMENT_HORIZONTAL), this._pokerDir = N.SC_DIR_NONE, this._changeTouchMeshAndMat(N.SC_DIR_DOWN_UP)
        }
        _initMatInfo() {
            let t = this.node.getComponent(n);
            t || (t = this.node.addComponent(n)), this._meshRenderer = t, this._pokerSrcWidth = this._pokerBackTexture.width, this._pokerSrcHeight = this._pokerBackTexture.height;
            let e = this._pokerSrcWidth * this._scaleRatio.x,
                s = this._pokerSrcHeight * this._scaleRatio.y,
                i = 0,
                h = 0;
            switch (this._pokerAlign) {
                case E.SC_ALIGNMENT_NONE:
                    break;
                case E.SC_ALIGNMENT_VERTICAL:
                    i = Math.min(e, s), h = Math.max(e, s);
                    break;
                case E.SC_ALIGNMENT_HORIZONTAL:
                    i = Math.max(e, s), h = Math.min(e, s)
            }
            let o = _(0, 0, 3 * T.getVisibleSize().height / 3.464101615137754);
            this.node.setPosition(o), this.node.getComponent(c).setContentSize(T.getVisibleSize().width, T.getVisibleSize().height), this.node.getComponent(c).convertToWorldSpaceAR(this.node.position, o);
            let r = h / 10,
                a = o.x - i * this.node.getComponent(c).anchorX + this._position.x,
                u = o.y - h * this.node.getComponent(c).anchorY + this._position.y;
            this._touchStartY = u, this._touchStartLRX = a, this._touchStartRLX = a + i, this._pokerDestWidth = i, this._pokerDestHeight = h;
            let S = [M.SC_MAT_None, M.SC_MAT_DOWN_UP, M.SC_MAT_DOWN_UP_AUTO, M.SC_MAT_DOWN_LEFT_RIGHT, M.SC_MAT_DOWN_RIGHT_LEFT, M.SC_MAT_DOWN_LEFT_RIGHT_AUTO];
            for (let t = 0; t < this._meshRenderer.materials.length; ++t)
                if (t < S.length) {
                    let e = this._meshRenderer.getMaterialInstance(t),
                        s = e.passes.length;
                    e.setProperty("radius", r), e.setProperty("width", i), e.setProperty("height", h), e.setProperty("offx", a), e.setProperty("offy", u), e.setProperty("rotation", 0), 2 == s ? (e.setProperty("textureBack", this._pokerBackTexture, 0), e.setProperty("textureFront", this._pokerFaceTexture, 1)) : 1 == s && e.setProperty("textureFront", this._pokerFaceTexture, 0), this._mapMat.add(S[t], e)
                }
        }
        _createMesh(t) {
            let e = this._pokerSrcWidth < this._pokerSrcHeight,
                s = this._pokerDestWidth,
                _ = this._pokerDestHeight,
                i = s / 30,
                h = _ / 30,
                o = 1 / 30,
                r = [],
                a = [],
                n = [];
            switch (t) {
                case E.SC_ALIGNMENT_HORIZONTAL:
                    for (let t = 0; t < 62; t++) {
                        let s = 0,
                            h = 0;
                        t % 2 == 0 ? s = t / 2 * i : (h = 0 + _, s = (t - 1) / 2 * i), s += 0, r.push(s, h, 0), t % 2 == 0 ? e ? a.push(1, t / 2 * o) : a.push(t / 2 * o, 0) : e ? a.push(0, (t - 1) / 2 * o) : a.push((t - 1) / 2 * o, 1)
                    }
                    for (let t = 0; t < 60; t += 2) n.push(t, t + 2, t + 1, t + 1, t + 2, t + 3);
                    break;
                case E.SC_ALIGNMENT_VERTICAL:
                    for (let t = 0; t < 62; t++) {
                        let _ = 0,
                            i = 0;
                        t % 2 == 0 ? i = t / 2 * h : (_ = 0 + s, i = (t - 1) / 2 * h), i += 0, r.push(_, i, 0), t % 2 == 0 ? e ? a.push(t / 2 * o, 1) : a.push(0, t / 2 * o) : e ? a.push((t - 1) / 2 * o, 0) : a.push(1, (t - 1) / 2 * o)
                    }
                    for (let t = 0; t < 60; t += 2) n.push(t, t + 1, t + 2, t + 1, t + 3, t + 2)
            }
            const T = new u;
            return S.MeshUtils.createMesh({
                positions: r,
                uvs: a,
                indices: n
            }, T), T
        }
        _changeTouchMeshAndMat(t) {
            if (this._pokerDir !== t) switch (this._pokerDir = t, t) {
                case N.SC_DIR_LEFT_RIGHT: {
                    let t = this._mapMat.get(M.SC_MAT_DOWN_LEFT_RIGHT);
                    t && (this._meshRenderer.setMaterialInstance(t, 0), this._meshRenderer.mesh = this._lrMesh)
                }
                break;
                case N.SC_DIR_RIGHT_LEFT: {
                    let t = this._mapMat.get(M.SC_MAT_DOWN_RIGHT_LEFT);
                    t && (this._meshRenderer.setMaterialInstance(t, 0), this._meshRenderer.mesh = this._lrMesh)
                }
                break;
                case N.SC_DIR_DOWN_UP: {
                    let t = this._mapMat.get(M.SC_MAT_DOWN_UP);
                    t && (this._meshRenderer.setMaterialInstance(t, 0), this._meshRenderer.mesh = this._udMesh)
                }
            }
        }
        _changeToAutoMatOnce() {
            if (!this._bChangedMatOnce) switch (this._bChangedMatOnce = !0, this._pokerDir) {
                case N.SC_DIR_NONE:
                    break;
                case N.SC_DIR_DOWN_UP: {
                    let t = this._mapMat.get(M.SC_MAT_DOWN_UP_AUTO);
                    t && this._meshRenderer.setMaterialInstance(t, 0)
                }
                break;
                case N.SC_DIR_LEFT_RIGHT:
                case N.SC_DIR_RIGHT_LEFT: {
                    let t = this._mapMat.get(M.SC_MAT_DOWN_LEFT_RIGHT_AUTO);
                    t && this._meshRenderer.setMaterialInstance(t, 0)
                }
            }
        }
        _registerTouchEvent() {
            this.unregisterEvent = !1, this.node.on(p.EventType.TOUCH_START, this._onTouchEventStart, this), this.node.on(p.EventType.TOUCH_MOVE, this._onTouchEventMove, this), this.node.on(p.EventType.TOUCH_END, this._onTouchEventEnd, this), this.node.on(p.EventType.TOUCH_CANCEL, this._onTuchEventCancel, this)
        }
        _unregisterTouchEvent() {
            this.node.off(p.EventType.TOUCH_START, this._onTouchEventStart, this), this.node.off(p.EventType.TOUCH_MOVE, this._onTouchEventMove, this), this.node.off(p.EventType.TOUCH_END, this._onTouchEventEnd, this), this.node.off(p.EventType.TOUCH_CANCEL, this._onTuchEventCancel, this), this.unregisterEvent = !0
        }
        _onTouchEventStart(t) {
            let e = t.getUILocation(),
                s = N.SC_DIR_NONE;
            e.x > this._touchStartLRX && e.x < this._touchStartRLX && e.y < this._touchStartY + 100 ? s = N.SC_DIR_DOWN_UP : e.y > this._touchStartY && e.y < this._touchStartY + this._pokerDestHeight && e.x < this._touchStartLRX + 100 ? s = N.SC_DIR_LEFT_RIGHT : e.y > this._touchStartY && e.y < this._touchStartY + this._pokerDestHeight && e.x > this._touchStartRLX - 100 && (s = N.SC_DIR_RIGHT_LEFT), this._changeTouchMeshAndMat(s)
        }
        _onTouchEventMove(t) {
            let e = t.getUILocation();
            switch (this._pokerDir) {
                case N.SC_DIR_NONE:
                    break;
                case N.SC_DIR_DOWN_UP:
                    this._pokerRatio = (e.y - this._touchStartY) / this._pokerDestHeight;
                    break;
                case N.SC_DIR_LEFT_RIGHT:
                    this._pokerRatio = (e.x - this._touchStartLRX) / this._pokerDestWidth;
                    break;
                case N.SC_DIR_RIGHT_LEFT:
                    this._pokerRatio = (this._touchStartRLX - e.x) / this._pokerDestWidth
            }
            this._pokerRatio = Math.max(0, this._pokerRatio), this._pokerRatio = Math.min(this._filpNum, this._pokerRatio), this._pokerRatio >= this._filpNum && (this._status = I.SC_STATUS_SMOOTH, this._unregisterTouchEvent())
        }
        _onTouchEventEnd(t) {
            this._pokerRatio >= this._filpNum ? (this._status = I.SC_STATUS_SMOOTH, this._unregisterTouchEvent()) : this._pokerRatio = 0
        }
        _onTuchEventCancel(t) {
            this._pokerRatio >= this._filpNum ? (this._status = I.SC_STATUS_SMOOTH, this._unregisterTouchEvent()) : this._pokerRatio = 0
        }
        showAuto() {
            let t = N.SC_DIR_DOWN_UP;
            this._changeTouchMeshAndMat(t), this._unregisterTouchEvent()
        }
        beginFlip() {
            this._autoFlip = !0
        }
    }) || C);
    e._RF.pop()
}