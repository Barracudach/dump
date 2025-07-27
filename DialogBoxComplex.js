import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as r from "./DialogBox.js";
import * as h from "./MTTConnector.js";

function main() {
    var g, d, c, p, u, f;
    o._RF.push({}, "9a53fCvHpRDqZlDkSJuNRUq", "DialogBoxComplex", void 0);
    const {
        ccclass: S,
        property: C
    } = a;
    t("DialogBoxComplex", (g = C(s), d = C(l), S((u = i((p = class extends r {
        constructor(...t) {
            super(...t), e(this, "dialogPrefabs", u, this), e(this, "dialogContainers", f, this), this.dialogScripts = [], this.hasHide = []
        }
        onLoad() {
            for (let t = 0; t < this.dialogPrefabs.length; t++) {
                let i = n(this.dialogPrefabs[t]);
                i.parent = this.dialogContainers[t], this.dialogScripts[t] = i.getComponent(r), this.dialogScripts[t].dialogComplex = this
            }
            h.instance.registerMessageCenter("changeMTTStyle", this.updateStyle.bind(this), this.node)
        }
        onDestroy() {
            h.instance.unregisterMessageCenter("changeMTTStyle", this.node)
        }
        hide() {
            if (h.instance.unregisterMessageCenter("changeMTTStyle", this.node), null != this.dialogScripts)
                for (let t = 0; t < this.dialogScripts.length; t++) this.dialogScripts[t].hideAction()
        }
        onHideAction(t) {
            for (let i = 0; i < this.dialogScripts.length; i++) this.dialogScripts[i] == t && (this.hasHide[i] = !0);
            let i = !0;
            for (let t = 0; t < this.hasHide.length; t++)
                if (!this.hasHide) {
                    i = !1;
                    break
                } i && this.node.destroy()
        }
        show(t, i, e, o, s = "", l = null) {
            this.dialogController = l;
            for (let a = 0; a < this.dialogScripts.length; a++) this.dialogScripts[a].show(t, i, e, o, s, l);
            this.updateStyle()
        }
        updateStyle() {
            if (this.dialogScripts && this.dialogScripts.length > 0) {
                for (let t = 0; t < this.dialogScripts.length; t++) this.dialogContainers[t].active = !1;
                this.dialogController && this.dialogController.dialogStyle < this.dialogContainers.length ? this.dialogContainers[this.dialogController.dialogStyle].active = !0 : this.dialogContainers[0].active = !0
            }
        }
    }).prototype, "dialogPrefabs", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), f = i(p.prototype, "dialogContainers", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), c = p)) || c));
    o._RF.pop()
}