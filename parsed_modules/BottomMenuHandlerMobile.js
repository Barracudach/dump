import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as c from "./cc.js";
import * as s from "./BottomMenuHandler.js";
import * as r from "./cv.js";

function main() {
    var l, u, d, p;
    i._RF.push({}, "b3b37dhGIxF16f7eWh2XlwT", "BottomMenuHandlerMobile", void 0);
    const {
        ccclass: b,
        property: h
    } = a;
    t("default", (l = h([n]), b((p = e((d = class extends s {
        constructor(...t) {
            super(...t), o(this, "buttonsTab", p, this)
        }
        showTab(t, e = -1) {
            this.node.active = !0, this.node.setSiblingIndex(e), this.loadTab(t)
        }
        loadTab(t) {
            super.loadTab(t), this.buttonsTab.forEach(((e, o) => {
                o == t ? c(e) && (e.active = !0) : c(e) && (e.active = !1)
            }))
        }
        autoHide(t = !0) {
            this.node.active && (t ? r.action.showAction(this.node, r.action.eMoveActionDir.EMAD_TO_RIGHT, r.action.eMoveActionType.EMAT_FADE_OUT, r.action.delay_type.NORMAL) : this.node.active = !1)
        }
        expand() {}
        onClickCloseButon() {
            super.onClickCloseButon(), r.action.showAction(this.node, r.action.eMoveActionDir.EMAD_NONE, r.action.eMoveActionType.EMAT_FADE_OUT, r.action.delay_type.NORMAL)
        }
    }).prototype, "buttonsTab", [l], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), u = d)) || u));
    i._RF.pop()
}