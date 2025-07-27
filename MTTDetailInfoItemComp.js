import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as f from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as c from "./LabelAndValueItem.js";
import * as d from "./MttHallDetailInfoDialog.js";
import * as D from "./MttHallDetailInfoDialog.js";

function main() {
    var p, b, v, T, m, I, w, L, y, P, C, W;
    o._RF.push({}, "5a45aZc+zxJcKJyglUJsgdB", "MTTDetailInfoItemComp", void 0);
    const {
        ccclass: _,
        property: x
    } = g;
    t("default", (p = x(n), b = x(l), v = x(a), T = x(s), m = x(r), _((L = i((w = class extends c {
        constructor(...t) {
            super(...t), e(this, "bg", L, this), e(this, "valueLimit", y, this), e(this, "infoToggle", P, this), e(this, "infoDialogPrefab", C, this), this.infoDialog = null, e(this, "infoDialogParent", W, this), this._onToggleOverlayButton = null, this._tipDialogDefaultWidth = 840
        }
        get tipDialogDefaultWidth() {
            return Math.min(this._tipDialogDefaultWidth, .75 * this.getComponent(l).width)
        }
        onLoad() {
            this.getComponent(l).anchorPoint.set(0, .5)
        }
        show() {
            this.node.active = !0
        }
        hide() {
            this.node.active = !1, h(this.infoDialog) && (this.infoDialog.node.active = !1)
        }
        setValueLabel(t) {
            this.valueLabel.string = t, this.valueLabel.overflow = f.Overflow.NONE, this.valueLabel.updateRenderData(!0);
            const i = this.valueLabel.getComponent(l);
            i.width >= this.valueLimit.width && (this.valueLabel.overflow = f.Overflow.RESIZE_HEIGHT, i.width = this.valueLimit.width), this.valueLabel.updateRenderData(!0), this.node.getComponent(l).height = i.height + 36
        }
        setInfo(t, i, e) {
            super.setInfo(t, i, e), this.setNameLabel(i.name), this.setValueLabel(i.text), this.showInfoToggle(!!i.hint), i.hint && this.setInfoDialogText(i.hint), i.isShow ? this.show() : this.hide()
        }
        showInfoToggle(t) {
            this.infoToggle && (this.infoToggle.node.active = t)
        }
        getInfoDialog() {
            if (!h(this.infoDialogParent)) return null;
            if (!h(this.infoDialog)) {
                const t = u(this.infoDialogPrefab);
                t.parent = this.infoDialogParent, t.active = !1, this.infoDialog = t.getComponent(D)
            }
            return this.infoDialog
        }
        setInfoDialogText(t) {
            const i = this.getInfoDialog();
            i && i.setText(t)
        }
        registerOnToggleCallback(t) {
            this._onToggleOverlayButton = t
        }
        onInfoToggleClicked() {
            const t = this.infoToggle.isChecked,
                i = this.getInfoDialog();
            if (i) {
                if (t) {
                    i.node.setPosition(0, 0);
                    let t = this.infoDialogParent.parent.convertToWorldSpaceAR(this.infoDialogParent.position),
                        e = this.node.convertToNodeSpaceAR(t),
                        o = e.x,
                        n = this.getComponent(l).width - e.x,
                        a = this.tipDialogDefaultWidth,
                        s = i.getDialogConeOffset();
                    o > n && o > a - s.right ? (i.setDialogWidth(a), i.setDialogConePositionType(d.Right)) : o < n && n > a - s.left ? (i.setDialogWidth(a), i.setDialogConePositionType(d.Left)) : (o > a / 2 && n > a / 2 ? i.setDialogWidth(a) : o < n ? i.setDialogWidth(o) : o > n ? i.setDialogWidth(n) : i.setDialogWidth(a), i.setDialogConePositionType(d.Center)), i.show()
                } else i.hide();
                this._onToggleOverlayButton && this._onToggleOverlayButton(t, (() => {
                    this.infoToggle.isChecked = !1, i.hide()
                }))
            }
        }
    }).prototype, "bg", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = i(w.prototype, "valueLimit", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = i(w.prototype, "infoToggle", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = i(w.prototype, "infoDialogPrefab", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), W = i(w.prototype, "infoDialogParent", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = w)) || I));
    o._RF.pop()
}