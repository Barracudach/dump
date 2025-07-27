import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";
import * as p from "./CommonTools.js";
import * as u from "./ThemeSystem.js";
import * as c from "./ColorSystemType.js";
import * as w from "./ColorsystemLobbyV2.js";

function main() {
    var m, _, N, b, C, g, T, S, y, f, v;
    n._RF.push({}, "f5d00fUNAFFX7cl5SvhXwIT", "MttHallDetailExpandTab", void 0);
    const {
        ccclass: H,
        property: E
    } = s;
    t("MttHallDetailExpandTab", (m = H("MttHallDetailExpandTab"), _ = E(i), N = E(i), b = E(i), C = E(Boolean), m((S = e((T = class extends a {
        constructor(...t) {
            super(...t), o(this, "maskNode", S, this), o(this, "contentNode", y, this), o(this, "arrowNode", f, this), o(this, "enableMaskOptimization", v, this), this._showOrHideTween = null, this._arrowRotateTween = null, this._isShowing = !1, this._onShow = null, this._onHide = null, this._tweenDuration = .1
        }
        registerOnShowCallback(t) {
            this._onShow = t
        }
        registerOnHideCallback(t) {
            this._onHide = t
        }
        onShow() {
            var t;
            null == (t = this._onShow) || t.call(this, this)
        }
        onHide() {
            var t;
            null == (t = this._onHide) || t.call(this, this)
        }
        updateExpandNodeSize() {
            const t = this.maskNode.getComponent(h),
                e = this.contentNode.getComponent(h);
            t.height = e.height
        }
        updateContentNodeSize() {
            p.instance.updateLayouts(this.contentNode, !0), p.instance.updateAlignments(this.contentNode, !0)
        }
        show() {
            var t, e;
            const o = this.maskNode.getComponent(h),
                n = this.contentNode.getComponent(h);
            this.enableMaskComponent(!0), null == (t = this._showOrHideTween) || t.stop(), null == (e = this._arrowRotateTween) || e.stop(), this.contentNode.active = !0, this.updateContentNodeSize(), this._showOrHideTween = new l(o).to(this._tweenDuration, {
                height: n.height
            }, {
                onComplete: () => {
                    this.updateExpandNodeSize(), this.contentNode.on(i.EventType.SIZE_CHANGED, this.updateExpandNodeSize, this), this.onShow()
                }
            }).start(), this._arrowRotateTween = new l(this.arrowNode).to(this._tweenDuration, {
                angle: 270
            }, {
                onComplete: () => {
                    const t = this.arrowNode.getComponent(u);
                    null == t || t.setColorScheme(c.LobbyV2, w.MttDetail_TabBtn_Text_Active)
                }
            }).start(), this._isShowing = !0
        }
        enableMaskComponent(t) {
            var e;
            if (!this.enableMaskOptimization) return;
            const o = null == (e = this.maskNode) ? void 0 : e.getComponent(r);
            d(o) && (o.enabled = t)
        }
        showImmdiately() {
            var t, e;
            null == (t = this._showOrHideTween) || t.stop(), null == (e = this._arrowRotateTween) || e.stop(), this.contentNode.active = !0, this.updateContentNodeSize(), this.updateExpandNodeSize(), this.contentNode.on(i.EventType.SIZE_CHANGED, this.updateExpandNodeSize, this), this.arrowNode.angle = 270;
            const o = this.arrowNode.getComponent(u);
            null == o || o.setColorScheme(c.LobbyV2, w.MttDetail_TabBtn_Text_Active), this._isShowing = !0, this.onShow()
        }
        hide() {
            var t, e;
            this.contentNode.off(i.EventType.SIZE_CHANGED);
            const o = this.maskNode.getComponent(h);
            null == (t = this._showOrHideTween) || t.stop(), null == (e = this._arrowRotateTween) || e.stop(), this.enableMaskComponent(!0), this._showOrHideTween = new l(o).to(this._tweenDuration, {
                height: 0
            }, {
                onComplete: () => {
                    this.contentNode.active = !1, this.enableMaskComponent(!1), this.onHide()
                }
            }).start(), this._arrowRotateTween = new l(this.arrowNode).to(this._tweenDuration, {
                angle: 90
            }, {
                onComplete: () => {
                    const t = this.arrowNode.getComponent(u);
                    null == t || t.setColorScheme(c.LobbyV2, w.MttDetail_TabBtn_Text_Inactive)
                }
            }).start(), this._isShowing = !1
        }
        hideImmediately() {
            var t, e;
            if (this.contentNode.off(i.EventType.SIZE_CHANGED), null == (t = this._showOrHideTween) || t.stop(), null == (e = this._arrowRotateTween) || e.stop(), this.maskNode.getComponent(h).height = 0, this.contentNode.active = !1, this.enableMaskComponent(!1), d(this.arrowNode)) {
                this.arrowNode.angle = 90;
                const t = this.arrowNode.getComponent(u);
                null == t || t.setColorScheme(c.LobbyV2, w.MttDetail_TabBtn_Text_Inactive)
            }
            this._isShowing = !1, this.onHide()
        }
        isShowing() {
            return this._isShowing
        }
    }).prototype, "maskNode", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = e(T.prototype, "contentNode", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = e(T.prototype, "arrowNode", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = e(T.prototype, "enableMaskOptimization", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), g = T)) || g));
    n._RF.pop()
}