import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as f from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";

function main() {
    var C, b, y, E, M;
    s._RF.push({}, "761baccU/pKfKKjmRxY5XaI", "CustomShader", void 0);
    const {
        ccclass: P,
        property: R
    } = a;
    e("CustomShader", (C = R({
        serializable: !0
    }), b = R(r), P((M = t((E = class extends n {
        constructor(...e) {
            super(...e), i(this, "_effect", M, this), this.effectPath = "", this.renderer = null, this.label = null, this.sprite = null, this.material = null, this.calcWorldPosChangeReq = !1, this.lastWorldPos = new o(0, 0, 0), this.isInit = !1
        }
        set effect(e) {
            this._effect = e, this.updateEffect()
        }
        get effect() {
            return this._effect
        }
        get haveCorrectEffect() {
            return null != this.material && null != this.material.effectAsset && this.material.effectAsset.name == this.effect.name
        }
        onLoad() {
            null == this.effect && (this.enabled = !1)
        }
        onEnable() {
            this.init(), h.isBrowser || this.isInit || (this.scheduleOnce(this.updateMaterial), this.isInit = !0), this.calcWorldPosChangeReq && (this.lastWorldPos = this.getWorldPos()), this.node.on(l.EventType.SIZE_CHANGED, this.onNodeSizeChanged, this)
        }
        onDisable() {
            this.node.off(l.EventType.SIZE_CHANGED, this.onNodeSizeChanged, this), this.enabled || this.reset(!0)
        }
        onDestroy() {
            this.reset(!1)
        }
        onRestore() {
            this.editor_updateEffectRef(), this.init()
        }
        async editor_updateEffectRef() {
            if (!this.effectPath || this.effect) return;
            let e = this,
                t = await Editor.Message.request("asset-db", "query-uuid", this.effectPath);
            d.loadAny({
                uuid: t
            }, ((t, i) => {
                t ? f(t.message || t) : e.effect = i
            }))
        }
        update(e) {
            if (this.calcWorldPosChangeReq) {
                let e = this.getWorldPos();
                Math.abs(this.lastWorldPos.x - e.x) + Math.abs(this.lastWorldPos.y - e.y) >= 1 && this.onNodePositionChanged(), this.lastWorldPos = e
            }
        }
        getWorldPos() {
            return null == this.node ? o.ZERO : null == this.node.parent ? this.node.getPosition() : this.node.parent.getComponent(c).convertToWorldSpaceAR(this.node.getPosition())
        }
        init() {
            if (this.enabled) {
                if (null == this.renderer) {
                    if (null == this.node) return void this.destroy();
                    this.renderer = this.node.getComponent(u), this.label = this.node.getComponent(p), this.sprite = this.node.getComponent(m), this.label && this.label.cacheMode == p.CacheMode.CHAR && 0 == this.label.useSystemFont && (this.label.cacheMode = p.CacheMode.BITMAP)
                }
                this.updateEffect()
            }
        }
        reset(e) {
            this.renderer && (this.haveCorrectEffect && (this.material.decRef(!0), this.material.destroy(), this.material = null), e && (this.renderer.customMaterial = null, this.renderer.updateMaterial()))
        }
        forceUpdate() {
            this.updateEffect()
        }
        initMaterial() {
            this.material = new g, this.material.initialize({
                effectAsset: this.effect,
                defines: {
                    USE_TEXTURE: !0
                }
            }), this.renderer.customMaterial = this.material, this.material.addRef()
        }
        updateEffect() {
            if (this.effect) {
                if (null == this.material) {
                    if (!this.renderer) return;
                    this.initMaterial()
                } else {
                    if (!this.renderer) return;
                    null === this.renderer.customMaterial && (this.renderer.customMaterial = this.material)
                }
                this.haveCorrectEffect || this.initMaterial(), this.onNodeSizeChanged(), this.updateMaterial()
            } else this.reset(!0)
        }
        onNodeSizeChanged() {}
        onNodePositionChanged() {}
        updateMaterial() {}
    }).prototype, "_effect", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), t(E.prototype, "effect", [b], Object.getOwnPropertyDescriptor(E.prototype, "effect"), E.prototype), y = E)) || y));
    s._RF.pop()
}