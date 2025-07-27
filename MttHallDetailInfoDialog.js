import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as h from "./cc.js";
import * as e from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";
import * as u from "./CommonTools.js";

function main() {
    var c, p, f, C, D, P, m, v, x;
    e._RF.push({}, "4956fR+AzFMZ4i0iQdJlWGh", "MttHallDetailInfoDialog", void 0);
    const {
        ccclass: y,
        property: b
    } = s;
    let w = t("MttHallDetailInfoDialogPivot", function(t) {
        return t[t.Left = 0] = "Left", t[t.Center = 1] = "Center", t[t.Right = 2] = "Right", t
    }({}));
    t("MttHallDetailInfoDialog", (c = y("MttHallDetailInfoDialog"), p = b(n), f = b(l), C = b([l]), c((m = i((P = class extends a {
        constructor(...t) {
            super(...t), o(this, "text", m, this), o(this, "dialogCone", v, this), o(this, "dialogConePositions", x, this)
        }
        setDialogWidth(t) {
            this.node.getComponent(r).width = t, u.instance.updateAlignments(this.node, !0)
        }
        show() {
            this.node.active = !0
        }
        hide() {
            this.node.active = !1
        }
        setText(t) {
            t = t || "", this.text.string = t
        }
        setDialogConePositionType(t) {
            const i = this.dialogConePositions[t];
            this.setDialogConePosition({
                x: null == i ? void 0 : i.position.x
            })
        }
        setDialogConePosition(t) {
            g(this.dialogCone) && t && null != t.x && (this.dialogCone.setPosition(t.x, this.dialogCone.position.y), this.node.setPosition(-t.x, this.node.position.y))
        }
        setDialogConeWorldPosition(t) {
            g(this.dialogCone) && this.dialogCone.setPosition(new d(this.dialogCone.parent.convertToNodeSpaceAR(new d(t, 0, 0)).x, this.dialogCone.position.y, this.dialogCone.position.z))
        }
        getDialogConeOffset() {
            var t, i;
            return {
                left: (null == (t = this.dialogConePositions[w.Left]) ? void 0 : t.getComponent(h).left) || 0,
                right: (null == (i = this.dialogConePositions[w.Right]) ? void 0 : i.getComponent(h).right) || 0
            }
        }
    }).prototype, "text", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = i(P.prototype, "dialogCone", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = i(P.prototype, "dialogConePositions", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), D = P)) || D));
    e._RF.pop()
}